define('mod-sandbox/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'mod-sandbox/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _modSandboxConfigEnvironment) {

  var name = _modSandboxConfigEnvironment['default'].APP.name;
  var version = _modSandboxConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});