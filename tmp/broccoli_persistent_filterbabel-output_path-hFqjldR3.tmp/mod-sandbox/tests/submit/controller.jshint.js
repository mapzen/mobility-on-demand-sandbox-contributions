define('mod-sandbox/tests/submit/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'submit/controller.js should pass jshint.\nsubmit/controller.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nsubmit/controller.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});