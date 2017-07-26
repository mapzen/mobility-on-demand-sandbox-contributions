define('mod-sandbox/initializers/load-bootstrap-config', ['exports', 'mod-sandbox/config/environment', 'ember-bootstrap/config'], function (exports, _modSandboxConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_modSandboxConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});