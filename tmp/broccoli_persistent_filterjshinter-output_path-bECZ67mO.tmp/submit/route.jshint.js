QUnit.module('JSHint | submit/route.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'submit/route.js should pass jshint.\nsubmit/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nsubmit/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
