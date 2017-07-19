define('mod-sandbox/tests/mixins/shared-actions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/shared-actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/shared-actions.js should pass jshint.');
  });
});