var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global heimdall */
import { assert, warn } from 'ember-data/-debug';
import OrderedSet from '../../ordered-set';
import _normalizeLink from '../../normalize-link';

var Relationship = function () {
  function Relationship(store, internalModel, inverseKey, relationshipMeta) {
    _classCallCheck(this, Relationship);

    var async = relationshipMeta.options.async;
    var polymorphic = relationshipMeta.options.polymorphic;
    this.members = new OrderedSet();
    this.canonicalMembers = new OrderedSet();
    this.store = store;
    this.key = relationshipMeta.key;
    this.inverseKey = inverseKey;
    this.internalModel = internalModel;
    this.isAsync = typeof async === 'undefined' ? true : async;
    this.isPolymorphic = typeof polymorphic === 'undefined' ? true : polymorphic;
    this.relationshipMeta = relationshipMeta;
    //This probably breaks for polymorphic relationship in complex scenarios, due to
    //multiple possible modelNames
    this.inverseKeyForImplicit = this.internalModel.modelName + this.key;
    this.linkPromise = null;
    this.meta = null;
    this.hasData = false;
    this.hasLoaded = false;
  }

  Relationship.prototype.removeInverseRelationships = function removeInverseRelationships() {
    var _this = this;

    if (!this.inverseKey) {
      return;
    }

    var allMembers =
    // we actually want a union of members and canonicalMembers
    // they should be disjoint but currently are not due to a bug
    this.members.toArray().concat(this.canonicalMembers.toArray());

    allMembers.forEach(function (inverseInternalModel) {
      var relationship = inverseInternalModel._relationships.get(_this.inverseKey);
      relationship.inverseDidDematerialize();
    });
  };

  Relationship.prototype.inverseDidDematerialize = function inverseDidDematerialize() {};

  Relationship.prototype.updateMeta = function updateMeta(meta) {
    this.meta = meta;
  };

  Relationship.prototype.clear = function clear() {

    var members = this.members.list;
    while (members.length > 0) {
      var member = members[0];
      this.removeInternalModel(member);
    }

    var canonicalMembers = this.canonicalMembers.list;
    while (canonicalMembers.length > 0) {
      var _member = canonicalMembers[0];
      this.removeCanonicalInternalModel(_member);
    }
  };

  Relationship.prototype.removeInternalModels = function removeInternalModels(internalModels) {
    var _this2 = this;

    internalModels.forEach(function (internalModel) {
      return _this2.removeInternalModel(internalModel);
    });
  };

  Relationship.prototype.addInternalModels = function addInternalModels(internalModels, idx) {
    var _this3 = this;

    internalModels.forEach(function (internalModel) {
      _this3.addInternalModel(internalModel, idx);
      if (idx !== undefined) {
        idx++;
      }
    });
  };

  Relationship.prototype.addCanonicalInternalModels = function addCanonicalInternalModels(internalModels, idx) {
    for (var i = 0; i < internalModels.length; i++) {
      if (idx !== undefined) {
        this.addCanonicalInternalModel(internalModels[i], i + idx);
      } else {
        this.addCanonicalInternalModel(internalModels[i]);
      }
    }
  };

  Relationship.prototype.addCanonicalInternalModel = function addCanonicalInternalModel(internalModel, idx) {
    if (!this.canonicalMembers.has(internalModel)) {
      this.canonicalMembers.add(internalModel);
      this.setupInverseRelationship(internalModel);
    }
    this.flushCanonicalLater();
    this.setHasData(true);
  };

  Relationship.prototype.setupInverseRelationship = function setupInverseRelationship(internalModel) {
    if (this.inverseKey) {
      var relationships = internalModel._relationships;
      var relationshipExisted = relationships.has(this.inverseKey);
      var relationship = relationships.get(this.inverseKey);
      if (relationshipExisted || this.isPolymorphic) {
        // if we have only just initialized the inverse relationship, then it
        // already has this.internalModel in its canonicalMembers, so skip the
        // unnecessary work.  The exception to this is polymorphic
        // relationships whose members are determined by their inverse, as those
        // relationships cannot efficiently find their inverse payloads.
        relationship.addCanonicalInternalModel(this.internalModel);
      }
    } else {
      var _relationships = internalModel._implicitRelationships;
      var _relationship = _relationships[this.inverseKeyForImplicit];
      if (!_relationship) {
        _relationship = _relationships[this.inverseKeyForImplicit] = new Relationship(this.store, internalModel, this.key, { options: {} });
      }
      _relationship.addCanonicalInternalModel(this.internalModel);
    }
  };

  Relationship.prototype.removeCanonicalInternalModels = function removeCanonicalInternalModels(internalModels, idx) {
    for (var i = 0; i < internalModels.length; i++) {
      if (idx !== undefined) {
        this.removeCanonicalInternalModel(internalModels[i], i + idx);
      } else {
        this.removeCanonicalInternalModel(internalModels[i]);
      }
    }
  };

  Relationship.prototype.removeCanonicalInternalModel = function removeCanonicalInternalModel(internalModel, idx) {
    if (this.canonicalMembers.has(internalModel)) {
      this.removeCanonicalInternalModelFromOwn(internalModel);
      if (this.inverseKey) {
        this.removeCanonicalInternalModelFromInverse(internalModel);
      } else {
        if (internalModel._implicitRelationships[this.inverseKeyForImplicit]) {
          internalModel._implicitRelationships[this.inverseKeyForImplicit].removeCanonicalInternalModel(this.internalModel);
        }
      }
    }
    this.flushCanonicalLater();
  };

  Relationship.prototype.addInternalModel = function addInternalModel(internalModel, idx) {
    if (!this.members.has(internalModel)) {
      this.members.addWithIndex(internalModel, idx);
      this.notifyRecordRelationshipAdded(internalModel, idx);
      if (this.inverseKey) {
        internalModel._relationships.get(this.inverseKey).addInternalModel(this.internalModel);
      } else {
        if (!internalModel._implicitRelationships[this.inverseKeyForImplicit]) {
          internalModel._implicitRelationships[this.inverseKeyForImplicit] = new Relationship(this.store, internalModel, this.key, { options: {} });
        }
        internalModel._implicitRelationships[this.inverseKeyForImplicit].addInternalModel(this.internalModel);
      }
      this.internalModel.updateRecordArrays();
    }
    this.setHasData(true);
  };

  Relationship.prototype.removeInternalModel = function removeInternalModel(internalModel) {
    if (this.members.has(internalModel)) {
      this.removeInternalModelFromOwn(internalModel);
      if (this.inverseKey) {
        this.removeInternalModelFromInverse(internalModel);
      } else {
        if (internalModel._implicitRelationships[this.inverseKeyForImplicit]) {
          internalModel._implicitRelationships[this.inverseKeyForImplicit].removeInternalModel(this.internalModel);
        }
      }
    }
  };

  Relationship.prototype.removeInternalModelFromInverse = function removeInternalModelFromInverse(internalModel) {
    var inverseRelationship = internalModel._relationships.get(this.inverseKey);
    //Need to check for existence, as the record might unloading at the moment
    if (inverseRelationship) {
      inverseRelationship.removeInternalModelFromOwn(this.internalModel);
    }
  };

  Relationship.prototype.removeInternalModelFromOwn = function removeInternalModelFromOwn(internalModel) {
    this.members.delete(internalModel);
    this.notifyRecordRelationshipRemoved(internalModel);
    this.internalModel.updateRecordArrays();
  };

  Relationship.prototype.removeCanonicalInternalModelFromInverse = function removeCanonicalInternalModelFromInverse(internalModel) {
    var inverseRelationship = internalModel._relationships.get(this.inverseKey);
    //Need to check for existence, as the record might unloading at the moment
    if (inverseRelationship) {
      inverseRelationship.removeCanonicalInternalModelFromOwn(this.internalModel);
    }
  };

  Relationship.prototype.removeCanonicalInternalModelFromOwn = function removeCanonicalInternalModelFromOwn(internalModel) {
    this.canonicalMembers.delete(internalModel);
    this.flushCanonicalLater();
  };

  Relationship.prototype.flushCanonical = function flushCanonical() {
    var list = this.members.list;
    this.willSync = false;
    //a hack for not removing new internalModels
    //TODO remove once we have proper diffing
    var newInternalModels = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].isNew()) {
        newInternalModels.push(list[i]);
      }
    }

    //TODO(Igor) make this less abysmally slow
    this.members = this.canonicalMembers.copy();
    for (var _i = 0; _i < newInternalModels.length; _i++) {
      this.members.add(newInternalModels[_i]);
    }
  };

  Relationship.prototype.flushCanonicalLater = function flushCanonicalLater() {
    if (this.willSync) {
      return;
    }
    this.willSync = true;
    this.store._updateRelationshipState(this);
  };

  Relationship.prototype.updateLink = function updateLink(link) {
    warn('You pushed a record of type \'' + this.internalModel.modelName + '\' with a relationship \'' + this.key + '\' configured as \'async: false\'. You\'ve included a link but no primary data, this may be an error in your payload.', this.isAsync || this.hasData, {
      id: 'ds.store.push-link-for-sync-relationship'
    });
    assert('You have pushed a record of type \'' + this.internalModel.modelName + '\' with \'' + this.key + '\' as a link, but the value of that link is not a string.', typeof link === 'string' || link === null);

    this.link = link;
    this.linkPromise = null;
    this.internalModel.notifyPropertyChange(this.key);
  };

  Relationship.prototype.findLink = function findLink() {
    if (this.linkPromise) {
      return this.linkPromise;
    } else {
      var promise = this.fetchLink();
      this.linkPromise = promise;
      return promise.then(function (result) {
        return result;
      });
    }
  };

  Relationship.prototype.updateInternalModelsFromAdapter = function updateInternalModelsFromAdapter(internalModels) {
    //TODO(Igor) move this to a proper place
    //TODO Once we have adapter support, we need to handle updated and canonical changes
    this.computeChanges(internalModels);
  };

  Relationship.prototype.notifyRecordRelationshipAdded = function notifyRecordRelationshipAdded() {};

  Relationship.prototype.notifyRecordRelationshipRemoved = function notifyRecordRelationshipRemoved() {};

  /*
   `hasData` for a relationship is a flag to indicate if we consider the
   content of this relationship "known". Snapshots uses this to tell the
   difference between unknown (`undefined`) or empty (`null`). The reason for
   this is that we wouldn't want to serialize unknown relationships as `null`
   as that might overwrite remote state.
    All relationships for a newly created (`store.createRecord()`) are
   considered known (`hasData === true`).
   */


  Relationship.prototype.setHasData = function setHasData(value) {
    this.hasData = value;
  };

  /*
   `hasLoaded` is a flag to indicate if we have gotten data from the adapter or
   not when the relationship has a link.
    This is used to be able to tell when to fetch the link and when to return
   the local data in scenarios where the local state is considered known
   (`hasData === true`).
    Updating the link will automatically set `hasLoaded` to `false`.
   */


  Relationship.prototype.setHasLoaded = function setHasLoaded(value) {
    this.hasLoaded = value;
  };

  /*
   `push` for a relationship allows the store to push a JSON API Relationship
   Object onto the relationship. The relationship will then extract and set the
   meta, data and links of that relationship.
    `push` use `updateMeta`, `updateData` and `updateLink` to update the state
   of the relationship.
   */


  Relationship.prototype.push = function push(payload, initial) {

    var hasData = false;
    var hasLink = false;

    if (payload.meta) {
      this.updateMeta(payload.meta);
    }

    if (payload.data !== undefined) {
      hasData = true;
      this.updateData(payload.data, initial);
    }

    if (payload.links && payload.links.related) {
      var relatedLink = _normalizeLink(payload.links.related);
      if (relatedLink && relatedLink.href && relatedLink.href !== this.link) {
        hasLink = true;
        this.updateLink(relatedLink.href, initial);
      }
    }

    /*
     Data being pushed into the relationship might contain only data or links,
     or a combination of both.
      If we got data we want to set both hasData and hasLoaded to true since
     this would indicate that we should prefer the local state instead of
     trying to fetch the link or call findRecord().
      If we have no data but a link is present we want to set hasLoaded to false
     without modifying the hasData flag. This will ensure we fetch the updated
     link next time the relationship is accessed.
     */
    if (hasData) {
      this.setHasData(true);
      this.setHasLoaded(true);
    } else if (hasLink) {
      this.setHasLoaded(false);
    }
  };

  Relationship.prototype.updateData = function updateData() {};

  _createClass(Relationship, [{
    key: 'parentType',
    get: function get() {
      return this.internalModel.modelName;
    }
  }]);

  return Relationship;
}();

export default Relationship;