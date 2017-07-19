define('ember-bootstrap/utils/listen-to-cp', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed,
      getWithDefault = _ember['default'].getWithDefault;

  /**
   * CP macro that listens to dependent (external) property, but allows overriding it locally without violating DDAU
   * By using a simple setter it will still trigger on changes of the dependent property even when being set before.
   *
   * Kudos to @fsmanuel for coming up with this solution.
   *
   * @method
   * @return {boolean}
   * @param {string} dependentKey
   * @param {*} defaultValue
   * @private
   */

  exports['default'] = function (dependentKey) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return computed(dependentKey, {
      get: function get() {
        return getWithDefault(this, dependentKey, defaultValue);
      },
      set: function set(key, value) {
        // eslint-disable-line no-unused-vars
        return value;
      }
    });
  };
});