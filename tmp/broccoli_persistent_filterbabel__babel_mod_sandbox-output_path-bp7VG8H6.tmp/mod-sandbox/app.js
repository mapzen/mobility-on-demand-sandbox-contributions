define('mod-sandbox/app', ['exports', 'ember', 'mod-sandbox/resolver', 'ember-load-initializers', 'mod-sandbox/config/environment'], function (exports, _ember, _modSandboxResolver, _emberLoadInitializers, _modSandboxConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _modSandboxConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _modSandboxConfigEnvironment['default'].podModulePrefix,
    Resolver: _modSandboxResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _modSandboxConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});