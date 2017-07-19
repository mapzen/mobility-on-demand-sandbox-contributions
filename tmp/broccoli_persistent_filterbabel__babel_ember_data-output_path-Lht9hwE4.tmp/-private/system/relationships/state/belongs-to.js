function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Ember from 'ember';
import { assertPolymorphicType, assert } from 'ember-data/-debug';
import { PromiseObject } from "../../promise-proxies";
import Relationship from "./relationship";

var BelongsToRelationship = function (_Relationship) {
  _inherits(BelongsToRelationship, _Relationship);

  function BelongsToRelationship(store, internalModel, inverseKey, relationshipMeta) {
    _classCallCheck(this, BelongsToRelationship);

    var _this = _possibleConstructorReturn(this, _Relationship.call(this, store, internalModel, inverseKey, relationshipMeta));

    _this.internalModel = internalModel;
    _this.key = relationshipMeta.key;
    _this.inverseInternalModel = null;
    _this.canonicalState = null;
    return _this;
  }

  BelongsToRelationship.prototype.setInternalModel = function setInternalModel(internalModel) {
    if (internalModel) {
      this.addInternalModel(internalModel);
    } else if (this.inverseInternalModel) {
      this.removeInternalModel(this.inverseInternalModel);
    }
    this.setHasData(true);
    this.setHasLoaded(true);
  };

  BelongsToRelationship.prototype.setCanonicalInternalModel = function setCanonicalInternalModel(internalModel) {
    if (internalModel) {
      this.addCanonicalInternalModel(internalModel);
    } else if (this.canonicalState) {
      this.removeCanonicalInternalModel(this.canonicalState);
    }
    this.flushCanonicalLater();
  };

  BelongsToRelationship.prototype.setInitialCanonicalInternalModel = function setInitialCanonicalInternalModel(internalModel) {
    if (!internalModel) {
      return;
    }

    // When we initialize a belongsTo relationship, we want to avoid work like
    // notifying our internalModel that we've "changed" and excessive thrash on
    // setting up inverse relationships
    this.canonicalMembers.add(internalModel);
    this.members.add(internalModel);
    this.inverseInternalModel = this.canonicalState = internalModel;
    this.setupInverseRelationship(internalModel);
  };

  BelongsToRelationship.prototype.addCanonicalInternalModel = function addCanonicalInternalModel(internalModel) {
    if (this.canonicalMembers.has(internalModel)) {
      return;
    }

    if (this.canonicalState) {
      this.removeCanonicalInternalModel(this.canonicalState);
    }

    this.canonicalState = internalModel;
    _Relationship.prototype.addCanonicalInternalModel.call(this, internalModel);
  };

  BelongsToRelationship.prototype.inverseDidDematerialize = function inverseDidDematerialize() {
    this.notifyBelongsToChanged();
  };

  BelongsToRelationship.prototype.flushCanonical = function flushCanonical() {
    //temporary fix to not remove newly created records if server returned null.
    //TODO remove once we have proper diffing
    if (this.inverseInternalModel && this.inverseInternalModel.isNew() && !this.canonicalState) {
      return;
    }
    if (this.inverseInternalModel !== this.canonicalState) {
      this.inverseInternalModel = this.canonicalState;
      this.notifyBelongsToChanged();
    }

    _Relationship.prototype.flushCanonical.call(this);
  };

  BelongsToRelationship.prototype.addInternalModel = function addInternalModel(internalModel) {
    if (this.members.has(internalModel)) {
      return;
    }

    assertPolymorphicType(this.internalModel, this.relationshipMeta, internalModel);

    if (this.inverseInternalModel) {
      this.removeInternalModel(this.inverseInternalModel);
    }

    this.inverseInternalModel = internalModel;
    _Relationship.prototype.addInternalModel.call(this, internalModel);
    this.notifyBelongsToChanged();
  };

  BelongsToRelationship.prototype.setRecordPromise = function setRecordPromise(newPromise) {
    var content = newPromise.get && newPromise.get('content');
    assert("You passed in a promise that did not originate from an EmberData relationship. You can only pass promises that come from a belongsTo or hasMany relationship to the get call.", content !== undefined);
    this.setInternalModel(content ? content._internalModel : content);
  };

  BelongsToRelationship.prototype.removeInternalModelFromOwn = function removeInternalModelFromOwn(internalModel) {
    if (!this.members.has(internalModel)) {
      return;
    }
    this.inverseInternalModel = null;
    _Relationship.prototype.removeInternalModelFromOwn.call(this, internalModel);
    this.notifyBelongsToChanged();
  };

  BelongsToRelationship.prototype.notifyBelongsToChanged = function notifyBelongsToChanged() {
    this.internalModel.notifyBelongsToChanged(this.key);
  };

  BelongsToRelationship.prototype.removeCanonicalInternalModelFromOwn = function removeCanonicalInternalModelFromOwn(internalModel) {
    if (!this.canonicalMembers.has(internalModel)) {
      return;
    }
    this.canonicalState = null;
    _Relationship.prototype.removeCanonicalInternalModelFromOwn.call(this, internalModel);
  };

  BelongsToRelationship.prototype.findRecord = function findRecord() {
    if (this.inverseInternalModel) {
      return this.store._findByInternalModel(this.inverseInternalModel);
    } else {
      return Ember.RSVP.Promise.resolve(null);
    }
  };

  BelongsToRelationship.prototype.fetchLink = function fetchLink() {
    var _this2 = this;

    return this.store.findBelongsTo(this.internalModel, this.link, this.relationshipMeta).then(function (internalModel) {
      if (internalModel) {
        _this2.addInternalModel(internalModel);
      }
      return internalModel;
    });
  };

  BelongsToRelationship.prototype.getRecord = function getRecord() {
    var _this3 = this;

    //TODO(Igor) flushCanonical here once our syncing is not stupid
    if (this.isAsync) {
      var promise = void 0;
      if (this.link) {
        if (this.hasLoaded) {
          promise = this.findRecord();
        } else {
          promise = this.findLink().then(function () {
            return _this3.findRecord();
          });
        }
      } else {
        promise = this.findRecord();
      }

      return PromiseObject.create({
        promise: promise,
        content: this.inverseInternalModel ? this.inverseInternalModel.getRecord() : null
      });
    } else {
      if (this.inverseInternalModel === null) {
        return null;
      }
      var toReturn = this.inverseInternalModel.getRecord();
      assert("You looked up the '" + this.key + "' relationship on a '" + this.internalModel.modelName + "' with id " + this.internalModel.id + " but some of the associated records were not loaded. Either make sure they are all loaded together with the parent record, or specify that the relationship is async (`DS.belongsTo({ async: true })`)", toReturn === null || !toReturn.get('isEmpty'));
      return toReturn;
    }
  };

  BelongsToRelationship.prototype.reload = function reload() {
    // TODO handle case when reload() is triggered multiple times

    if (this.link) {
      return this.fetchLink();
    }

    // reload record, if it is already loaded
    if (this.inverseInternalModel && this.inverseInternalModel.hasRecord) {
      return this.inverseInternalModel.getRecord().reload();
    }

    return this.findRecord();
  };

  BelongsToRelationship.prototype.updateData = function updateData(data, initial) {
    assert('Ember Data expected the data for the ' + this.key + ' relationship on a ' + this.internalModel.toString() + ' to be in a JSON API format and include an `id` and `type` property but it found ' + Ember.inspect(data) + '. Please check your serializer and make sure it is serializing the relationship payload into a JSON API format.', data === null || data.id !== undefined && data.type !== undefined);
    var internalModel = this.store._pushResourceIdentifier(this, data);
    if (initial) {
      this.setInitialCanonicalInternalModel(internalModel);
    } else {
      this.setCanonicalInternalModel(internalModel);
    }
  };

  return BelongsToRelationship;
}(Relationship);

export default BelongsToRelationship;