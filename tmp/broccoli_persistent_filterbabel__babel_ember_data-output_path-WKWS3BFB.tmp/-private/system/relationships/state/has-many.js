var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { assert, assertPolymorphicType } from 'ember-data/-debug';
import { PromiseManyArray } from '../../promise-proxies';
import Relationship from './relationship';
import OrderedSet from '../../ordered-set';
import ManyArray from '../../many-array';

var ManyRelationship = function (_Relationship) {
  _inherits(ManyRelationship, _Relationship);

  function ManyRelationship(store, internalModel, inverseKey, relationshipMeta) {
    _classCallCheck(this, ManyRelationship);

    var _this = _possibleConstructorReturn(this, _Relationship.call(this, store, internalModel, inverseKey, relationshipMeta));

    _this.belongsToType = relationshipMeta.type;
    _this.canonicalState = [];
    _this.isPolymorphic = relationshipMeta.options.polymorphic;
    _this._manyArray = null;
    _this.__loadingPromise = null;
    return _this;
  }

  ManyRelationship.prototype._updateLoadingPromise = function _updateLoadingPromise(promise, content) {
    if (this.__loadingPromise) {
      if (content) {
        this.__loadingPromise.set('content', content);
      }
      this.__loadingPromise.set('promise', promise);
    } else {
      this.__loadingPromise = new PromiseManyArray({
        promise: promise,
        content: content
      });
    }

    return this.__loadingPromise;
  };

  ManyRelationship.prototype.removeInverseRelationships = function removeInverseRelationships() {
    _Relationship.prototype.removeInverseRelationships.call(this);
    if (this._manyArray) {
      this._manyArray.destroy();
      this._manyArray = null;
    }

    if (this._loadingPromise) {
      this._loadingPromise.destroy();
    }
  };

  ManyRelationship.prototype.updateMeta = function updateMeta(meta) {
    _Relationship.prototype.updateMeta.call(this, meta);
    if (this._manyArray) {
      this._manyArray.set('meta', meta);
    }
  };

  ManyRelationship.prototype.addCanonicalInternalModel = function addCanonicalInternalModel(internalModel, idx) {
    if (this.canonicalMembers.has(internalModel)) {
      return;
    }
    if (idx !== undefined) {
      this.canonicalState.splice(idx, 0, internalModel);
    } else {
      this.canonicalState.push(internalModel);
    }
    _Relationship.prototype.addCanonicalInternalModel.call(this, internalModel, idx);
  };

  ManyRelationship.prototype.inverseDidDematerialize = function inverseDidDematerialize() {
    if (this._manyArray) {
      this._manyArray.destroy();
      this._manyArray = null;
    }
    this.notifyHasManyChanged();
  };

  ManyRelationship.prototype.addInternalModel = function addInternalModel(internalModel, idx) {
    if (this.members.has(internalModel)) {
      return;
    }

    assertPolymorphicType(this.internalModel, this.relationshipMeta, internalModel);
    _Relationship.prototype.addInternalModel.call(this, internalModel, idx);
    // make lazy later
    this.manyArray._addInternalModels([internalModel], idx);
  };

  ManyRelationship.prototype.removeCanonicalInternalModelFromOwn = function removeCanonicalInternalModelFromOwn(internalModel, idx) {
    var i = idx;
    if (!this.canonicalMembers.has(internalModel)) {
      return;
    }
    if (i === undefined) {
      i = this.canonicalState.indexOf(internalModel);
    }
    if (i > -1) {
      this.canonicalState.splice(i, 1);
    }
    _Relationship.prototype.removeCanonicalInternalModelFromOwn.call(this, internalModel, idx);
  };

  ManyRelationship.prototype.flushCanonical = function flushCanonical() {
    if (this._manyArray) {
      this._manyArray.flushCanonical();
    }
    _Relationship.prototype.flushCanonical.call(this);
  };

  ManyRelationship.prototype.removeInternalModelFromOwn = function removeInternalModelFromOwn(internalModel, idx) {
    if (!this.members.has(internalModel)) {
      return;
    }
    _Relationship.prototype.removeInternalModelFromOwn.call(this, internalModel, idx);
    var manyArray = this.manyArray;
    if (idx !== undefined) {
      //TODO(Igor) not used currently, fix
      manyArray.currentState.removeAt(idx);
    } else {
      manyArray._removeInternalModels([internalModel]);
    }
  };

  ManyRelationship.prototype.notifyRecordRelationshipAdded = function notifyRecordRelationshipAdded(internalModel, idx) {
    this.internalModel.notifyHasManyAdded(this.key, internalModel, idx);
  };

  ManyRelationship.prototype.reload = function reload() {
    var manyArray = this.manyArray;
    var manyArrayLoadedState = manyArray.get('isLoaded');

    if (this._loadingPromise) {
      if (this._loadingPromise.get('isPending')) {
        return this._loadingPromise;
      }
      if (this._loadingPromise.get('isRejected')) {
        manyArray.set('isLoaded', manyArrayLoadedState);
      }
    }

    var promise = void 0;
    if (this.link) {
      promise = this.fetchLink();
    } else {
      promise = this.store._scheduleFetchMany(manyArray.currentState).then(function () {
        return manyArray;
      });
    }

    this._updateLoadingPromise(promise);
    return this._loadingPromise;
  };

  ManyRelationship.prototype.computeChanges = function computeChanges() {
    var internalModels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var members = this.canonicalMembers;
    var internalModelsToRemove = [];
    var internalModelSet = setForArray(internalModels);

    members.forEach(function (member) {
      if (internalModelSet.has(member)) {
        return;
      }

      internalModelsToRemove.push(member);
    });

    this.removeCanonicalInternalModels(internalModelsToRemove);

    for (var i = 0, l = internalModels.length; i < l; i++) {
      var internalModel = internalModels[i];
      this.removeCanonicalInternalModel(internalModel);
      this.addCanonicalInternalModel(internalModel, i);
    }
  };

  ManyRelationship.prototype.setInitialInternalModels = function setInitialInternalModels(internalModels) {
    var _this2 = this;

    if (!internalModels) {
      return;
    }

    var args = [0, this.canonicalState.length].concat(internalModels);
    this.canonicalState.splice.apply(this.canonicalState, args);
    internalModels.forEach(function (internalModel) {
      _this2.canonicalMembers.add(internalModel);
      _this2.members.add(internalModel);
      _this2.setupInverseRelationship(internalModel);
    });
  };

  ManyRelationship.prototype.fetchLink = function fetchLink() {
    var _this3 = this;

    return this.store.findHasMany(this.internalModel, this.link, this.relationshipMeta).then(function (records) {
      if (records.hasOwnProperty('meta')) {
        _this3.updateMeta(records.meta);
      }
      _this3.store._backburner.join(function () {
        _this3.updateInternalModelsFromAdapter(records);
        _this3.manyArray.set('isLoaded', true);
      });
      return _this3.manyArray;
    });
  };

  ManyRelationship.prototype.findRecords = function findRecords() {
    var manyArray = this.manyArray;
    var internalModels = manyArray.currentState;

    //TODO CLEANUP
    return this.store.findMany(internalModels).then(function () {
      if (!manyArray.get('isDestroyed')) {
        //Goes away after the manyArray refactor
        manyArray.set('isLoaded', true);
      }
      return manyArray;
    });
  };

  ManyRelationship.prototype.notifyHasManyChanged = function notifyHasManyChanged() {
    this.internalModel.notifyHasManyAdded(this.key);
  };

  ManyRelationship.prototype.getRecords = function getRecords() {
    var _this4 = this;

    //TODO(Igor) sync server here, once our syncing is not stupid
    var manyArray = this.manyArray;
    if (this.isAsync) {
      var promise = void 0;
      if (this.link) {
        if (this.hasLoaded) {
          promise = this.findRecords();
        } else {
          promise = this.findLink().then(function () {
            return _this4.findRecords();
          });
        }
      } else {
        promise = this.findRecords();
      }
      return this._updateLoadingPromise(promise, manyArray);
    } else {
      assert('You looked up the \'' + this.key + '\' relationship on a \'' + this.internalModel.type.modelName + '\' with id ' + this.internalModel.id + ' but some of the associated records were not loaded. Either make sure they are all loaded together with the parent record, or specify that the relationship is async (\'DS.hasMany({ async: true })\')', manyArray.isEvery('isEmpty', false));

      //TODO(Igor) WTF DO I DO HERE?
      // TODO @runspired equal WTFs to Igor
      if (!manyArray.get('isDestroyed')) {
        manyArray.set('isLoaded', true);
      }
      return manyArray;
    }
  };

  ManyRelationship.prototype.updateData = function updateData(data, initial) {
    var internalModels = this.store._pushResourceIdentifiers(this, data);
    if (initial) {
      this.setInitialInternalModels(internalModels);
    } else {
      this.updateInternalModelsFromAdapter(internalModels);
    }
  };

  _createClass(ManyRelationship, [{
    key: '_loadingPromise',
    get: function get() {
      return this.__loadingPromise;
    }
  }, {
    key: 'manyArray',
    get: function get() {
      if (!this._manyArray) {
        this._manyArray = ManyArray.create({
          canonicalState: this.canonicalState,
          store: this.store,
          relationship: this,
          type: this.store.modelFor(this.belongsToType),
          record: this.internalModel,
          meta: this.meta,
          isPolymorphic: this.isPolymorphic
        });
      }
      return this._manyArray;
    }
  }]);

  return ManyRelationship;
}(Relationship);

export default ManyRelationship;


function setForArray(array) {
  var set = new OrderedSet();

  if (array) {
    for (var i = 0, l = array.length; i < l; i++) {
      set.add(array[i]);
    }
  }

  return set;
}