define('ember-data/setup-container', ['exports', 'ember-data/-private', 'ember-data/serializers/json-api', 'ember-data/serializers/json', 'ember-data/serializers/rest', 'ember-data/adapters/json-api', 'ember-data/adapters/rest', 'ember-data/transforms/number', 'ember-data/transforms/date', 'ember-data/transforms/string', 'ember-data/transforms/boolean'], function (exports, _emberDataPrivate, _emberDataSerializersJsonApi, _emberDataSerializersJson, _emberDataSerializersRest, _emberDataAdaptersJsonApi, _emberDataAdaptersRest, _emberDataTransformsNumber, _emberDataTransformsDate, _emberDataTransformsString, _emberDataTransformsBoolean) {
  'use strict';

  exports['default'] = setupContainer;

  function has(applicationOrRegistry, fullName) {
    if (applicationOrRegistry.has) {
      // < 2.1.0
      return applicationOrRegistry.has(fullName);
    } else {
      // 2.1.0+
      return applicationOrRegistry.hasRegistration(fullName);
    }
  }

  /*
   Configures a registry for use with an Ember-Data
   store. Accepts an optional namespace argument.
  
   @method initializeStore
   @param {Ember.Registry} registry
   */
  function initializeStore(registry) {
    // registry.optionsForType for Ember < 2.1.0
    // application.registerOptionsForType for Ember 2.1.0+
    var registerOptionsForType = registry.registerOptionsForType || registry.optionsForType;
    registerOptionsForType.call(registry, 'serializer', { singleton: false });
    registerOptionsForType.call(registry, 'adapter', { singleton: false });

    registry.register('serializer:-default', _emberDataSerializersJson['default']);
    registry.register('serializer:-rest', _emberDataSerializersRest['default']);
    registry.register('adapter:-rest', _emberDataAdaptersRest['default']);

    registry.register('adapter:-json-api', _emberDataAdaptersJsonApi['default']);
    registry.register('serializer:-json-api', _emberDataSerializersJsonApi['default']);

    if (!has(registry, 'service:store')) {
      registry.register('service:store', _emberDataPrivate.Store);
    }
  }

  /*
   Configures a registry with injections on Ember applications
   for the Ember-Data store. Accepts an optional namespace argument.
  
   @method initializeDebugAdapter
   @param {Ember.Registry} registry
   */
  function initializeDataAdapter(registry) {
    registry.register('data-adapter:main', _emberDataPrivate.DebugAdapter);
  }

  /*
   Configures a registry with injections on Ember applications
   for the Ember-Data store. Accepts an optional namespace argument.
  
   @method initializeStoreInjections
   @param {Ember.Registry} registry
   */
  function initializeStoreInjections(registry) {
    // registry.injection for Ember < 2.1.0
    // application.inject for Ember 2.1.0+
    var inject = registry.inject || registry.injection;
    inject.call(registry, 'controller', 'store', 'service:store');
    inject.call(registry, 'route', 'store', 'service:store');
    inject.call(registry, 'data-adapter', 'store', 'service:store');
  }

  /*
   Configures a registry for use with Ember-Data
   transforms.
  
   @method initializeTransforms
   @param {Ember.Registry} registry
   */
  function initializeTransforms(registry) {
    registry.register('transform:boolean', _emberDataTransformsBoolean['default']);
    registry.register('transform:date', _emberDataTransformsDate['default']);
    registry.register('transform:number', _emberDataTransformsNumber['default']);
    registry.register('transform:string', _emberDataTransformsString['default']);
  }

  function setupContainer(application) {
    initializeDataAdapter(application);
    initializeTransforms(application);
    initializeStoreInjections(application);
    initializeStore(application);
  }
});