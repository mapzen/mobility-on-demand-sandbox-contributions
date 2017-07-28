define('ember-qunit/only', ['exports', 'ember-qunit/test-wrapper', 'qunit'], function (exports, _emberQunitTestWrapper, _qunit) {
  'use strict';

  exports['default'] = only;

  function only() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.unshift(_qunit.only);
    _emberQunitTestWrapper['default'].apply(null, args);
  }
});