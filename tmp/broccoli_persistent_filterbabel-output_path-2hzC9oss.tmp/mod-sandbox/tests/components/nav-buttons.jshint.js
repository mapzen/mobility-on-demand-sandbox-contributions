define('mod-sandbox/tests/components/nav-buttons.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/nav-buttons.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/nav-buttons.js should pass jshint.\ncomponents/nav-buttons.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/nav-buttons.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});