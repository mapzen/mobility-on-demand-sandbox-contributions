define('mod-sandbox/tests/helpers/start-app', ['exports', 'ember', 'mod-sandbox/app', 'mod-sandbox/config/environment'], function (exports, _ember, _modSandboxApp, _modSandboxConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _modSandboxConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _modSandboxApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});