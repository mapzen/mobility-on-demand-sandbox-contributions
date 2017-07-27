define('ember-qunit/skip', ['exports', 'ember-qunit/test-wrapper', 'qunit'], function (exports, _emberQunitTestWrapper, _qunit) {
  'use strict';

  exports['default'] = skip;

  function skip() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.unshift(_qunit.skip);
    _emberQunitTestWrapper['default'].apply(null, args);
  }
});