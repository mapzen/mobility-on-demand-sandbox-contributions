QUnit.module('JSHint | mixins/shared-actions.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'mixins/shared-actions.js should pass jshint.\nmixins/shared-actions.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmixins/shared-actions.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
