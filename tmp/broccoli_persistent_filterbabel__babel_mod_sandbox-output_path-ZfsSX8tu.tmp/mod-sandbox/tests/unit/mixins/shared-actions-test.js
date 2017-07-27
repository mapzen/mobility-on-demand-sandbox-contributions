define('mod-sandbox/tests/unit/mixins/shared-actions-test', ['exports', 'ember', 'mod-sandbox/mixins/shared-actions', 'qunit'], function (exports, _ember, _modSandboxMixinsSharedActions, _qunit) {

  (0, _qunit.module)('Unit | Mixin | shared actions');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var SharedActionsObject = _ember['default'].Object.extend(_modSandboxMixinsSharedActions['default']);
    var subject = SharedActionsObject.create();
    assert.ok(subject);
  });
});