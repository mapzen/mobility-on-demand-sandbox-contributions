define('mod-sandbox/tests/submit/contact/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/contact/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'submit/contact/controller.js should pass jshint.\nsubmit/contact/controller.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nsubmit/contact/controller.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nsubmit/contact/controller.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nsubmit/contact/controller.js: line 9, col 34, Missing semicolon.\n\n4 errors');
  });
});