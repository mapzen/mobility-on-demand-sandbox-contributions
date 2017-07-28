define('mod-sandbox/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'mod-sandbox/tests/helpers/start-app', 'mod-sandbox/tests/helpers/destroy-app'], function (exports, _qunit, _modSandboxTestsHelpersStartApp, _modSandboxTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _modSandboxTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _modSandboxTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});