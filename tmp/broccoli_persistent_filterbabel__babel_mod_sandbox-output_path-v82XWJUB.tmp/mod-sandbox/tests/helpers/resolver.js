define('mod-sandbox/tests/helpers/resolver', ['exports', 'mod-sandbox/resolver', 'mod-sandbox/config/environment'], function (exports, _modSandboxResolver, _modSandboxConfigEnvironment) {

  var resolver = _modSandboxResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _modSandboxConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _modSandboxConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});