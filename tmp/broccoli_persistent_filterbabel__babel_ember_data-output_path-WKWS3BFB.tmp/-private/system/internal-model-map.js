var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { assert, deprecate } from 'ember-data/-debug';
import InternalModel from './model/internal-model';

/**
 `InternalModelMap` is a custom storage map for internalModels of a given modelName
 used by `IdentityMap`.

 It was extracted from an implicit pojo based "internalModel map" and preserves
 that interface while we work towards a more official API.

 @class InternalModelMap
 @private
 */

var InternalModelMap = function () {
  function InternalModelMap(modelName) {
    _classCallCheck(this, InternalModelMap);

    this.modelName = modelName;
    this._idToModel = Object.create(null);
    this._models = [];
    this._metadata = null;
  }

  /**
    A "map" of records based on their ID for this modelName
   */


  /**
   *
   * @param id
   * @returns {InternalModel}
   */
  InternalModelMap.prototype.get = function get(id) {
    var r = this._idToModel[id];
    return r;
  };

  InternalModelMap.prototype.has = function has(id) {
    return !!this._idToModel[id];
  };

  InternalModelMap.prototype.set = function set(id, internalModel) {
    assert('You cannot index an internalModel by an empty id\'', id);
    assert('You cannot set an index for an internalModel to something other than an internalModel', internalModel instanceof InternalModel);
    assert('You cannot set an index for an internalModel that is not in the InternalModelMap', this.contains(internalModel));
    assert('You cannot update the id index of an InternalModel once set. Attempted to update ' + id + '.', !this.has(id) || this.get(id) === internalModel);

    this._idToModel[id] = internalModel;
  };

  InternalModelMap.prototype.add = function add(internalModel, id) {
    assert('You cannot re-add an already present InternalModel to the InternalModelMap.', !this.contains(internalModel));

    if (id) {
      this._idToModel[id] = internalModel;
    }

    this._models.push(internalModel);
  };

  InternalModelMap.prototype.remove = function remove(internalModel, id) {
    if (id) {
      delete this._idToModel[id];
    }

    var loc = this._models.indexOf(internalModel);

    if (loc !== -1) {
      this._models.splice(loc, 1);
    }
  };

  InternalModelMap.prototype.contains = function contains(internalModel) {
    return this._models.indexOf(internalModel) !== -1;
  };

  /**
   An array of all models of this modelName
   */


  /**
   Destroy all models in the internalModelTest and wipe metadata.
    @method clear
   */
  InternalModelMap.prototype.clear = function clear() {
    if (this._models) {
      var models = this._models;
      this._models = [];

      for (var i = 0; i < models.length; i++) {
        var model = models[i];
        model.unloadRecord();
      }
    }

    this._metadata = null;
  };

  InternalModelMap.prototype.destroy = function destroy() {
    this._store = null;
    this._modelClass = null;
  };

  _createClass(InternalModelMap, [{
    key: 'idToRecord',
    get: function get() {
      deprecate('Use of InternalModelMap.idToRecord is deprecated, use InternalModelMap.get(id) instead.', false, {
        id: 'ds.record-map.idToRecord',
        until: '2.13'
      });
      return this._idToModel;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._models.length;
    }
  }, {
    key: 'models',
    get: function get() {
      return this._models;
    }

    /**
     * meta information about internalModels
     */

  }, {
    key: 'metadata',
    get: function get() {
      return this._metadata || (this._metadata = Object.create(null));
    }

    /**
     deprecated (and unsupported) way of accessing modelClass
      @deprecated
     */

  }, {
    key: 'type',
    get: function get() {
      throw new Error('InternalModelMap.type is no longer available');
    }
  }]);

  return InternalModelMap;
}();

export default InternalModelMap;