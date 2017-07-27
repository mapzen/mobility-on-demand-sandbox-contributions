define('mod-sandbox/tests/test-helper', ['exports', 'mod-sandbox/tests/helpers/resolver', 'ember-qunit'], function (exports, _modSandboxTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_modSandboxTestsHelpersResolver['default']);
});