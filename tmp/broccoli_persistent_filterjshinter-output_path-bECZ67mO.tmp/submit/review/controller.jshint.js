QUnit.module('JSHint | submit/review/controller.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'submit/review/controller.js should pass jshint.\nsubmit/review/controller.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nsubmit/review/controller.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nsubmit/review/controller.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
