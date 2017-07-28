QUnit.module('JSHint | submit/intro/controller.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'submit/intro/controller.js should pass jshint.\nsubmit/intro/controller.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nsubmit/intro/controller.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nsubmit/intro/controller.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
