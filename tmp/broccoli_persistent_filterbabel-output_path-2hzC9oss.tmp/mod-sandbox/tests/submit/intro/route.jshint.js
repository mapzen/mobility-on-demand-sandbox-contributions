define('mod-sandbox/tests/submit/intro/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/intro/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'submit/intro/route.js should pass jshint.\nsubmit/intro/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nsubmit/intro/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});