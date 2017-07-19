var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  @module ember-data
*/

import Ember from 'ember';

var get = Ember.get;

/**
  @class Snapshot
  @namespace DS
  @private
  @constructor
  @param {DS.Model} internalModel The model to create a snapshot from
*/

var Snapshot = function () {
  function Snapshot(internalModel) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Snapshot);

    this._attributes = Object.create(null);
    this._belongsToRelationships = Object.create(null);
    this._belongsToIds = Object.create(null);
    this._hasManyRelationships = Object.create(null);
    this._hasManyIds = Object.create(null);
    this._internalModel = internalModel;

    var record = internalModel.getRecord();

    /**
     The underlying record for this snapshot. Can be used to access methods and
     properties defined on the record.
      Example
      ```javascript
     let json = snapshot.record.toJSON();
     ```
      @property record
     @type {DS.Model}
     */
    this.record = record;
    record.eachAttribute(function (keyName) {
      return _this._attributes[keyName] = get(record, keyName);
    });

    /**
     The id of the snapshot's underlying record
      Example
      ```javascript
     // store.push('post', { id: 1, author: 'Tomster', title: 'Ember.js rocks' });
     postSnapshot.id; // => '1'
     ```
      @property id
     @type {String}
     */
    this.id = internalModel.id;

    /**
     A hash of adapter options
     @property adapterOptions
     @type {Object}
     */
    this.adapterOptions = options.adapterOptions;
    this.include = options.include;

    /**
     The name of the type of the underlying record for this snapshot, as a string.
      @property modelName
     @type {String}
     */
    this.modelName = internalModel.modelName;

    this._changedAttributes = record.changedAttributes();
  }

  /**
   The type of the underlying record for this snapshot, as a DS.Model.
    @property type
   @type {DS.Model}
   */


  /**
   Returns the value of an attribute.
    Example
    ```javascript
   // store.push('post', { id: 1, author: 'Tomster', title: 'Ember.js rocks' });
   postSnapshot.attr('author'); // => 'Tomster'
   postSnapshot.attr('title'); // => 'Ember.js rocks'
   ```
    Note: Values are loaded eagerly and cached when the snapshot is created.
    @method attr
   @param {String} keyName
   @return {Object} The attribute value or undefined
   */
  Snapshot.prototype.attr = function attr(keyName) {
    if (keyName in this._attributes) {
      return this._attributes[keyName];
    }
    throw new Ember.Error("Model '" + Ember.inspect(this.record) + "' has no attribute named '" + keyName + "' defined.");
  };

  /**
   Returns all attributes and their corresponding values.
    Example
    ```javascript
   // store.push('post', { id: 1, author: 'Tomster', title: 'Ember.js rocks' });
   postSnapshot.attributes(); // => { author: 'Tomster', title: 'Ember.js rocks' }
   ```
    @method attributes
   @return {Object} All attributes of the current snapshot
   */


  Snapshot.prototype.attributes = function attributes() {
    return Ember.copy(this._attributes);
  };

  /**
   Returns all changed attributes and their old and new values.
    Example
    ```javascript
   // store.push('post', { id: 1, author: 'Tomster', title: 'Ember.js rocks' });
   postModel.set('title', 'Ember.js rocks!');
   postSnapshot.changedAttributes(); // => { title: ['Ember.js rocks', 'Ember.js rocks!'] }
   ```
    @method changedAttributes
   @return {Object} All changed attributes of the current snapshot
   */


  Snapshot.prototype.changedAttributes = function changedAttributes() {
    var changedAttributes = Object.create(null);
    var changedAttributeKeys = Object.keys(this._changedAttributes);

    for (var i = 0, length = changedAttributeKeys.length; i < length; i++) {
      var key = changedAttributeKeys[i];
      changedAttributes[key] = Ember.copy(this._changedAttributes[key]);
    }

    return changedAttributes;
  };

  /**
   Returns the current value of a belongsTo relationship.
    `belongsTo` takes an optional hash of options as a second parameter,
   currently supported options are:
    - `id`: set to `true` if you only want the ID of the related record to be
   returned.
    Example
    ```javascript
   // store.push('post', { id: 1, title: 'Hello World' });
   // store.createRecord('comment', { body: 'Lorem ipsum', post: post });
   commentSnapshot.belongsTo('post'); // => DS.Snapshot
   commentSnapshot.belongsTo('post', { id: true }); // => '1'
    // store.push('comment', { id: 1, body: 'Lorem ipsum' });
   commentSnapshot.belongsTo('post'); // => undefined
   ```
    Calling `belongsTo` will return a new Snapshot as long as there's any known
   data for the relationship available, such as an ID. If the relationship is
   known but unset, `belongsTo` will return `null`. If the contents of the
   relationship is unknown `belongsTo` will return `undefined`.
    Note: Relationships are loaded lazily and cached upon first access.
    @method belongsTo
   @param {String} keyName
   @param {Object} [options]
   @return {(DS.Snapshot|String|null|undefined)} A snapshot or ID of a known
   relationship or null if the relationship is known but unset. undefined
   will be returned if the contents of the relationship is unknown.
   */


  Snapshot.prototype.belongsTo = function belongsTo(keyName, options) {
    var id = options && options.id;
    var relationship = void 0,
        inverseInternalModel = void 0,
        hasData = void 0;
    var result = void 0;

    if (id && keyName in this._belongsToIds) {
      return this._belongsToIds[keyName];
    }

    if (!id && keyName in this._belongsToRelationships) {
      return this._belongsToRelationships[keyName];
    }

    relationship = this._internalModel._relationships.get(keyName);
    if (!(relationship && relationship.relationshipMeta.kind === 'belongsTo')) {
      throw new Ember.Error("Model '" + Ember.inspect(this.record) + "' has no belongsTo relationship named '" + keyName + "' defined.");
    }

    hasData = get(relationship, 'hasData');
    inverseInternalModel = get(relationship, 'inverseInternalModel');

    if (hasData) {
      if (inverseInternalModel && !inverseInternalModel.isDeleted()) {
        if (id) {
          result = get(inverseInternalModel, 'id');
        } else {
          result = inverseInternalModel.createSnapshot();
        }
      } else {
        result = null;
      }
    }

    if (id) {
      this._belongsToIds[keyName] = result;
    } else {
      this._belongsToRelationships[keyName] = result;
    }

    return result;
  };

  /**
   Returns the current value of a hasMany relationship.
    `hasMany` takes an optional hash of options as a second parameter,
   currently supported options are:
    - `ids`: set to `true` if you only want the IDs of the related records to be
   returned.
    Example
    ```javascript
   // store.push('post', { id: 1, title: 'Hello World', comments: [2, 3] });
   postSnapshot.hasMany('comments'); // => [DS.Snapshot, DS.Snapshot]
   postSnapshot.hasMany('comments', { ids: true }); // => ['2', '3']
    // store.push('post', { id: 1, title: 'Hello World' });
   postSnapshot.hasMany('comments'); // => undefined
   ```
    Note: Relationships are loaded lazily and cached upon first access.
    @method hasMany
   @param {String} keyName
   @param {Object} [options]
   @return {(Array|undefined)} An array of snapshots or IDs of a known
   relationship or an empty array if the relationship is known but unset.
   undefined will be returned if the contents of the relationship is unknown.
   */


  Snapshot.prototype.hasMany = function hasMany(keyName, options) {
    var ids = options && options.ids;
    var relationship = void 0,
        members = void 0,
        hasData = void 0;
    var results = void 0;

    if (ids && keyName in this._hasManyIds) {
      return this._hasManyIds[keyName];
    }

    if (!ids && keyName in this._hasManyRelationships) {
      return this._hasManyRelationships[keyName];
    }

    relationship = this._internalModel._relationships.get(keyName);
    if (!(relationship && relationship.relationshipMeta.kind === 'hasMany')) {
      throw new Ember.Error("Model '" + Ember.inspect(this.record) + "' has no hasMany relationship named '" + keyName + "' defined.");
    }

    hasData = get(relationship, 'hasData');
    members = get(relationship, 'members');

    if (hasData) {
      results = [];
      members.forEach(function (member) {
        if (!member.isDeleted()) {
          if (ids) {
            results.push(member.id);
          } else {
            results.push(member.createSnapshot());
          }
        }
      });
    }

    if (ids) {
      this._hasManyIds[keyName] = results;
    } else {
      this._hasManyRelationships[keyName] = results;
    }

    return results;
  };

  /**
    Iterates through all the attributes of the model, calling the passed
    function on each attribute.
     Example
     ```javascript
    snapshot.eachAttribute(function(name, meta) {
      // ...
    });
    ```
     @method eachAttribute
    @param {Function} callback the callback to execute
    @param {Object} [binding] the value to which the callback's `this` should be bound
  */


  Snapshot.prototype.eachAttribute = function eachAttribute(callback, binding) {
    this.record.eachAttribute(callback, binding);
  };

  /**
    Iterates through all the relationships of the model, calling the passed
    function on each relationship.
     Example
     ```javascript
    snapshot.eachRelationship(function(name, relationship) {
      // ...
    });
    ```
     @method eachRelationship
    @param {Function} callback the callback to execute
    @param {Object} [binding] the value to which the callback's `this` should be bound
  */


  Snapshot.prototype.eachRelationship = function eachRelationship(callback, binding) {
    this.record.eachRelationship(callback, binding);
  };

  /**
    Serializes the snapshot using the serializer for the model.
     Example
     ```app/adapters/application.js
    import DS from 'ember-data';
     export default DS.Adapter.extend({
      createRecord(store, type, snapshot) {
        var data = snapshot.serialize({ includeId: true });
        var url = `/${type.modelName}`;
         return fetch(url, {
          method: 'POST',
          body: data,
        }).then((response) => response.json())
      }
    });
    ```
     @method serialize
    @param {Object} options
    @return {Object} an object whose values are primitive JSON values only
   */


  Snapshot.prototype.serialize = function serialize(options) {
    return this.record.store.serializerFor(this.modelName).serialize(this, options);
  };

  _createClass(Snapshot, [{
    key: "type",
    get: function get() {
      // TODO @runspired we should deprecate this in favor of modelClass but only once
      // we've cleaned up the internals enough that a public change to follow suite is
      // uncontroversial.
      return this._internalModel.modelClass;
    }
  }]);

  return Snapshot;
}();

export default Snapshot;