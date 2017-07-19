define("ember-data/index", ["exports", "ember", "ember-data/-debug", "ember-data/-private", "ember-inflector", "ember-data/setup-container", "ember-data/instance-initializers/initialize-store-service", "ember-data/transforms/transform", "ember-data/transforms/number", "ember-data/transforms/date", "ember-data/transforms/string", "ember-data/transforms/boolean", "ember-data/adapter", "ember-data/adapters/json-api", "ember-data/adapters/rest", "ember-data/serializer", "ember-data/serializers/json-api", "ember-data/serializers/json", "ember-data/serializers/rest", "ember-data/serializers/embedded-records-mixin", "ember-data/attr"], function (exports, _ember, _emberDataDebug, _emberDataPrivate, _emberInflector, _emberDataSetupContainer, _emberDataInstanceInitializersInitializeStoreService, _emberDataTransformsTransform, _emberDataTransformsNumber, _emberDataTransformsDate, _emberDataTransformsString, _emberDataTransformsBoolean, _emberDataAdapter, _emberDataAdaptersJsonApi, _emberDataAdaptersRest, _emberDataSerializer, _emberDataSerializersJsonApi, _emberDataSerializersJson, _emberDataSerializersRest, _emberDataSerializersEmbeddedRecordsMixin, _emberDataAttr) {
  "use strict";

  /**
    Ember Data
    @module ember-data
    @main ember-data
  */

  if (_ember["default"].VERSION.match(/^1\.([0-9]|1[0-2])\./)) {
    throw new _ember["default"].Error("Ember Data requires at least Ember 1.13.0, but you have " + _ember["default"].VERSION + ". Please upgrade your version of Ember, then upgrade Ember Data.");
  }

  _emberDataPrivate.DS.Store = _emberDataPrivate.Store;
  _emberDataPrivate.DS.PromiseArray = _emberDataPrivate.PromiseArray;
  _emberDataPrivate.DS.PromiseObject = _emberDataPrivate.PromiseObject;

  _emberDataPrivate.DS.PromiseManyArray = _emberDataPrivate.PromiseManyArray;

  _emberDataPrivate.DS.Model = _emberDataPrivate.Model;
  _emberDataPrivate.DS.RootState = _emberDataPrivate.RootState;
  _emberDataPrivate.DS.attr = _emberDataAttr["default"];
  _emberDataPrivate.DS.Errors = _emberDataPrivate.Errors;

  _emberDataPrivate.DS.InternalModel = _emberDataPrivate.InternalModel;
  _emberDataPrivate.DS.Snapshot = _emberDataPrivate.Snapshot;

  _emberDataPrivate.DS.Adapter = _emberDataAdapter["default"];

  _emberDataPrivate.DS.AdapterError = _emberDataPrivate.AdapterError;
  _emberDataPrivate.DS.InvalidError = _emberDataPrivate.InvalidError;
  _emberDataPrivate.DS.TimeoutError = _emberDataPrivate.TimeoutError;
  _emberDataPrivate.DS.AbortError = _emberDataPrivate.AbortError;

  if ((0, _emberDataPrivate.isEnabled)('ds-extended-errors')) {
    _emberDataPrivate.DS.UnauthorizedError = _emberDataPrivate.UnauthorizedError;
    _emberDataPrivate.DS.ForbiddenError = _emberDataPrivate.ForbiddenError;
    _emberDataPrivate.DS.NotFoundError = _emberDataPrivate.NotFoundError;
    _emberDataPrivate.DS.ConflictError = _emberDataPrivate.ConflictError;
    _emberDataPrivate.DS.ServerError = _emberDataPrivate.ServerError;
  }

  _emberDataPrivate.DS.errorsHashToArray = _emberDataPrivate.errorsHashToArray;
  _emberDataPrivate.DS.errorsArrayToHash = _emberDataPrivate.errorsArrayToHash;

  _emberDataPrivate.DS.Serializer = _emberDataSerializer["default"];

  _emberDataPrivate.DS.DebugAdapter = _emberDataPrivate.DebugAdapter;

  _emberDataPrivate.DS.RecordArray = _emberDataPrivate.RecordArray;
  _emberDataPrivate.DS.FilteredRecordArray = _emberDataPrivate.FilteredRecordArray;
  _emberDataPrivate.DS.AdapterPopulatedRecordArray = _emberDataPrivate.AdapterPopulatedRecordArray;
  _emberDataPrivate.DS.ManyArray = _emberDataPrivate.ManyArray;

  _emberDataPrivate.DS.RecordArrayManager = _emberDataPrivate.RecordArrayManager;

  _emberDataPrivate.DS.RESTAdapter = _emberDataAdaptersRest["default"];
  _emberDataPrivate.DS.BuildURLMixin = _emberDataPrivate.BuildURLMixin;

  _emberDataPrivate.DS.RESTSerializer = _emberDataSerializersRest["default"];
  _emberDataPrivate.DS.JSONSerializer = _emberDataSerializersJson["default"];

  _emberDataPrivate.DS.JSONAPIAdapter = _emberDataAdaptersJsonApi["default"];
  _emberDataPrivate.DS.JSONAPISerializer = _emberDataSerializersJsonApi["default"];

  _emberDataPrivate.DS.Transform = _emberDataTransformsTransform["default"];
  _emberDataPrivate.DS.DateTransform = _emberDataTransformsDate["default"];
  _emberDataPrivate.DS.StringTransform = _emberDataTransformsString["default"];
  _emberDataPrivate.DS.NumberTransform = _emberDataTransformsNumber["default"];
  _emberDataPrivate.DS.BooleanTransform = _emberDataTransformsBoolean["default"];

  _emberDataPrivate.DS.EmbeddedRecordsMixin = _emberDataSerializersEmbeddedRecordsMixin["default"];

  _emberDataPrivate.DS.belongsTo = _emberDataPrivate.belongsTo;
  _emberDataPrivate.DS.hasMany = _emberDataPrivate.hasMany;

  _emberDataPrivate.DS.Relationship = _emberDataPrivate.Relationship;

  _emberDataPrivate.DS._setupContainer = _emberDataSetupContainer["default"];
  _emberDataPrivate.DS._initializeStoreService = _emberDataInstanceInitializersInitializeStoreService["default"];

  Object.defineProperty(_emberDataPrivate.DS, 'normalizeModelName', {
    enumerable: true,
    writable: false,
    configurable: false,
    value: _emberDataPrivate.normalizeModelName
  });

  Object.defineProperty(_emberDataPrivate.global, 'DS', {
    configurable: true,
    get: function get() {
      (0, _emberDataDebug.deprecate)('Using the global version of DS is deprecated. Please either import ' + 'the specific modules needed or `import DS from \'ember-data\';`.', false, { id: 'ember-data.global-ds', until: '3.0.0' });

      return _emberDataPrivate.DS;
    }
  });

  exports["default"] = _emberDataPrivate.DS;
});