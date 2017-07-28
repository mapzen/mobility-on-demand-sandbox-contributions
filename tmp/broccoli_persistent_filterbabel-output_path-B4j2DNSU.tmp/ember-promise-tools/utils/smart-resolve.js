define('ember-promise-tools/utils/smart-resolve', ['exports', 'ember-promise-tools/utils/is-promise', 'ember-promise-tools/utils/is-fulfilled', 'ember-promise-tools/utils/get-promise-content'], function (exports, _emberPromiseToolsUtilsIsPromise, _emberPromiseToolsUtilsIsFulfilled, _emberPromiseToolsUtilsGetPromiseContent) {
  'use strict';

  exports['default'] = function (maybePromise) {
    if (!(0, _emberPromiseToolsUtilsIsPromise['default'])(maybePromise)) {
      // Not a promise, return value
      return maybePromise;
    }

    if (!(0, _emberPromiseToolsUtilsIsFulfilled['default'])(maybePromise)) {
      // Promise is still pending, return promise
      return maybePromise;
    }

    // Try to unwrap promise and get content;
    return (0, _emberPromiseToolsUtilsGetPromiseContent['default'])(maybePromise);
  };
});