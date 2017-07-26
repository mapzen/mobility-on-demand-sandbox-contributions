function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import Ember from 'ember';
import RelationshipPayloads from './relationship-payloads';

var _get = Ember.get;

/**
  Manages relationship payloads for a given store, for uninitialized
  relationships.  Acts as a single source of truth (of payloads) for both sides
  of an uninitialized relationship so they can agree on the most up-to-date
  payload received without needing too much eager processing when those payloads
  are pushed into the store.

  This minimizes the work spent on relationships that are never initialized.

  Once relationships are initialized, their state is managed in a relationship
  state object (eg BelongsToRelationship or ManyRelationship).


  @example

    let relationshipPayloadsManager = new RelationshipPayloadsManager(store);

    const User = DS.Model.extend({
      hobbies: DS.hasMany('hobby')
    });

    const Hobby = DS.Model.extend({
      user: DS.belongsTo('user')
    });

    let userPayload = {
      data: {
        id: 1,
        type: 'user',
        relationships: {
          hobbies: {
            data: [{
              id: 2,
              type: 'hobby'
            }]
          }
        }
      },
    };
    relationshipPayloadsManager.push('user', 1, userPayload.data.relationships);

    relationshipPayloadsManager.get('hobby', 2, 'user') === {
      {
        data: {
          id: 1,
          type: 'user'
        }
      }
    }

  @private
  @class RelationshipPayloadsManager
*/

var RelationshipPayloadsManager = function () {
  function RelationshipPayloadsManager(store) {
    _classCallCheck(this, RelationshipPayloadsManager);

    this._store = store;
    // cache of `RelationshipPayload`s
    this._cache = Object.create(null);
  }

  /**
    Find the payload for the given relationship of the given model.
     Returns the payload for the given relationship, whether raw or computed from
    the payload of the inverse relationship.
     @example
       relationshipPayloadsManager.get('hobby', 2, 'user') === {
        {
          data: {
            id: 1,
            type: 'user'
          }
        }
      }
     @method
  */


  RelationshipPayloadsManager.prototype.get = function get(modelName, id, relationshipName) {
    var modelClass = this._store._modelFor(modelName);
    var relationshipsByName = _get(modelClass, 'relationshipsByName');
    var relationshipPayloads = this._getRelationshipPayloads(modelName, relationshipName, modelClass, relationshipsByName, false);
    return relationshipPayloads && relationshipPayloads.get(modelName, id, relationshipName);
  };

  /**
    Push a model's relationships payload into this cache.
     @example
       let userPayload = {
        data: {
          id: 1,
          type: 'user',
          relationships: {
            hobbies: {
              data: [{
                id: 2,
                type: 'hobby'
              }]
            }
          }
        },
      };
      relationshipPayloadsManager.push('user', 1, userPayload.data.relationships);
     @method
  */


  RelationshipPayloadsManager.prototype.push = function push(modelName, id, relationshipsData) {
    var _this = this;

    if (!relationshipsData) {
      return;
    }

    var modelClass = this._store._modelFor(modelName);
    var relationshipsByName = _get(modelClass, 'relationshipsByName');
    Object.keys(relationshipsData).forEach(function (key) {
      var relationshipPayloads = _this._getRelationshipPayloads(modelName, key, modelClass, relationshipsByName, true);
      if (relationshipPayloads) {
        relationshipPayloads.push(modelName, id, key, relationshipsData[key]);
      }
    });
  };

  /**
    Unload a model's relationships payload.
     @method
  */


  RelationshipPayloadsManager.prototype.unload = function unload(modelName, id) {
    var _this2 = this;

    var modelClass = this._store._modelFor(modelName);
    var relationshipsByName = _get(modelClass, 'relationshipsByName');
    relationshipsByName.forEach(function (_, relationshipName) {
      var relationshipPayloads = _this2._getRelationshipPayloads(modelName, relationshipName, modelClass, relationshipsByName, false);
      if (relationshipPayloads) {
        relationshipPayloads.unload(modelName, id, relationshipName);
      }
    });
  };

  /**
    Find the RelationshipPayloads object for the given relationship.  The same
    RelationshipPayloads object is returned for either side of a relationship.
     @example
       const User = DS.Model.extend({
        hobbies: DS.hasMany('hobby')
      });
       const Hobby = DS.Model.extend({
        user: DS.belongsTo('user')
      });
       relationshipPayloads.get('user', 'hobbies') === relationshipPayloads.get('hobby', 'user');
     The signature has a somewhat large arity to avoid extra work, such as
      a)  string maipulation & allocation with `modelName` and
         `relationshipName`
      b)  repeatedly getting `relationshipsByName` via `Ember.get`
      @private
    @method
  */


  RelationshipPayloadsManager.prototype._getRelationshipPayloads = function _getRelationshipPayloads(modelName, relationshipName, modelClass, relationshipsByName, init) {
    if (!relationshipsByName.has(relationshipName)) {
      return;
    }

    var key = modelName + ':' + relationshipName;
    if (!this._cache[key] && init) {
      return this._initializeRelationshipPayloads(modelName, relationshipName, modelClass, relationshipsByName);
    }

    return this._cache[key];
  };

  /**
    Create the `RelationshipsPayload` for the relationship `modelName`, `relationshipName`, and its inverse.
     @private
    @method
  */


  RelationshipPayloadsManager.prototype._initializeRelationshipPayloads = function _initializeRelationshipPayloads(modelName, relationshipName, modelClass, relationshipsByName) {
    var relationshipMeta = relationshipsByName.get(relationshipName);
    var inverseMeta = modelClass.inverseFor(relationshipName, this._store);

    var inverseModelName = void 0;
    var inverseRelationshipName = void 0;
    var inverseRelationshipMeta = void 0;

    // figure out the inverse relationship; we need two things
    //  a) the inverse model name
    //- b) the name of the inverse relationship
    if (inverseMeta) {
      inverseRelationshipName = inverseMeta.name;
      inverseModelName = relationshipMeta.type;
      inverseRelationshipMeta = _get(inverseMeta.type, 'relationshipsByName').get(inverseRelationshipName);
    } else {
      // relationship has no inverse
      inverseModelName = inverseRelationshipName = '';
      inverseRelationshipMeta = null;
    }

    var lhsKey = modelName + ':' + relationshipName;
    var rhsKey = inverseModelName + ':' + inverseRelationshipName;

    // populate the cache for both sides of the relationship, as they both use
    // the same `RelationshipPayloads`.
    //
    // This works out better than creating a single common key, because to
    // compute that key we would need to do work to look up the inverse
    //
    return this._cache[lhsKey] = this._cache[rhsKey] = new RelationshipPayloads(this._store, modelName, relationshipName, relationshipMeta, inverseModelName, inverseRelationshipName, inverseRelationshipMeta);
  };

  return RelationshipPayloadsManager;
}();

export default RelationshipPayloadsManager;