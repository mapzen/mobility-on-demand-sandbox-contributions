define('ember-promise-tools/utils/get-promise-content', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  // It's assumed if you call this method, it was previously checked that it was a promise

  exports['default'] = function (promise) {
    if (_ember['default'].PromiseProxyMixin.detect(promise)) {
      return promise.get('content');
    }

    if (promise instanceof _ember['default'].RSVP.Promise) {
      return promise._result;
    }

    // Only can get the content for one of the two above
    return null;
  };
});
// and is fulfilled