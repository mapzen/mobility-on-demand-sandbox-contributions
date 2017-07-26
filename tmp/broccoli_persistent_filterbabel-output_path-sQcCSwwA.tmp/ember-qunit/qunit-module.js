define('ember-qunit/qunit-module', ['exports', 'ember', 'qunit'], function (exports, _ember, _qunit) {
  'use strict';

  exports.createModule = createModule;

  function beforeEachCallback(callbacks) {
    if (typeof callbacks !== 'object') {
      return;
    }
    if (!callbacks) {
      return;
    }

    var beforeEach;

    if (callbacks.setup) {
      beforeEach = callbacks.setup;
      delete callbacks.setup;
    }

    if (callbacks.beforeEach) {
      beforeEach = callbacks.beforeEach;
      delete callbacks.beforeEach;
    }

    return beforeEach;
  }

  function afterEachCallback(callbacks) {
    if (typeof callbacks !== 'object') {
      return;
    }
    if (!callbacks) {
      return;
    }

    var afterEach;

    if (callbacks.teardown) {
      afterEach = callbacks.teardown;
      delete callbacks.teardown;
    }

    if (callbacks.afterEach) {
      afterEach = callbacks.afterEach;
      delete callbacks.afterEach;
    }

    return afterEach;
  }

  function createModule(Constructor, name, description, callbacks) {
    var beforeEach = beforeEachCallback(callbacks || description);
    var afterEach = afterEachCallback(callbacks || description);

    var module = new Constructor(name, description, callbacks);

    (0, _qunit.module)(module.name, {
      setup: function setup(assert) {
        var done = assert.async();

        // provide the test context to the underlying module
        module.setContext(this);

        return module.setup().then(function () {
          if (beforeEach) {
            return beforeEach.call(module.context, assert);
          }
        })['finally'](done);
      },

      teardown: function teardown(assert) {
        var result = undefined;

        if (afterEach) {
          result = afterEach.call(module.context, assert);
        }

        var done = assert.async();
        return _ember['default'].RSVP.resolve(result).then(function () {
          return module.teardown()['finally'](done);
        });
      }
    });
  }
});