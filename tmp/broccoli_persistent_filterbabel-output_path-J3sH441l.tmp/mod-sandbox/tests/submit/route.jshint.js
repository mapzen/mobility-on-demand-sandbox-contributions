define('mod-sandbox/tests/submit/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/route.js should pass jshint.');
  });
});