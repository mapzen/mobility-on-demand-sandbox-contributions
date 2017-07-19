define('mod-sandbox/tests/submit/source/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/source/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/source/route.js should pass jshint.');
  });
});