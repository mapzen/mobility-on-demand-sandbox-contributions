define('mod-sandbox/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'mod-sandbox/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _modSandboxConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_modSandboxConfigEnvironment['default'].APP.name, _modSandboxConfigEnvironment['default'].APP.version)
  };
});