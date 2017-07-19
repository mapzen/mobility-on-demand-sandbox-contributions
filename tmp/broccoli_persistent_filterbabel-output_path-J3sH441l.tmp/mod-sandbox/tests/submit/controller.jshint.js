define('mod-sandbox/tests/submit/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/controller.js should pass jshint.');
  });
});