define('ember-data/adapters/errors', ['exports', 'ember-data/-private'], function (exports, _emberDataPrivate) {
  'use strict';

  Object.defineProperty(exports, 'AdapterError', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.AdapterError;
    }
  });
  Object.defineProperty(exports, 'InvalidError', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.InvalidError;
    }
  });
  Object.defineProperty(exports, 'UnauthorizedError', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.UnauthorizedError;
    }
  });
  Object.defineProperty(exports, 'ForbiddenError', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.ForbiddenError;
    }
  });
  Object.defineProperty(exports, 'NotFoundError', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.NotFoundError;
    }
  });
  Object.defineProperty(exports, 'ConflictError', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.ConflictError;
    }
  });
  Object.defineProperty(exports, 'ServerError', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.ServerError;
    }
  });
  Object.defineProperty(exports, 'TimeoutError', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.TimeoutError;
    }
  });
  Object.defineProperty(exports, 'AbortError', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.AbortError;
    }
  });
  Object.defineProperty(exports, 'errorsHashToArray', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.errorsHashToArray;
    }
  });
  Object.defineProperty(exports, 'errorsArrayToHash', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.errorsArrayToHash;
    }
  });
});