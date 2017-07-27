define('ember-promise-tools/utils/is-fulfilled', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  // It's assumed if you call this method, it was previously checked that it is a promise

  exports['default'] = function (promise) {
    if (_ember['default'].PromiseProxyMixin.detect(promise)) {
      if (promise.get('isFulfilled')) {
        return true;
      }

      return false;
    }

    if (promise instanceof _ember['default'].RSVP.Promise) {
      if (promise._state === 1) {
        // Fulfilled
        return true;
      }
      return false;
    }

    // Can't detect it if its not one of the two kinds above
    return false;
  };
});