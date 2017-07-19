define('mod-sandbox/tests/submit/success/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/success/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/success/route.js should pass jshint.');
  });
});