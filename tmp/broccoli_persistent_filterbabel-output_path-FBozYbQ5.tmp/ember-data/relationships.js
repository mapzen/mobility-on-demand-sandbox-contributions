define('ember-data/relationships', ['exports', 'ember-data/-private'], function (exports, _emberDataPrivate) {
  /**
    @module ember-data
  */
  'use strict';

  Object.defineProperty(exports, 'belongsTo', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.belongsTo;
    }
  });
  Object.defineProperty(exports, 'hasMany', {
    enumerable: true,
    get: function get() {
      return _emberDataPrivate.hasMany;
    }
  });
});