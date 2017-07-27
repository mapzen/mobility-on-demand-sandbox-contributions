define('mod-sandbox/router', ['exports', 'ember', 'mod-sandbox/config/environment'], function (exports, _ember, _modSandboxConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _modSandboxConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('submit', function () {
      this.route('license');
      this.route('source');
      this.route('contact');
      this.route('data');
      this.route('column-mapping');
      this.route('success');
      this.route('intro');
      this.route('review');
    });
  });

  exports['default'] = Router;
});