define('ember-bootstrap/mixins/transition-support', ['exports', 'ember', 'ember-bootstrap/utils/transition-support'], function (exports, _ember, _emberBootstrapUtilsTransitionSupport) {
  'use strict';

  var computed = _ember['default'].computed;

  /**
   * Mixin for components that support transitions
   *
   * @class TransitionSupport
   * @namespace Mixins
   * @private
   */

  exports['default'] = _ember['default'].Mixin.create({

    /**
     * @property transitionsEnabled
     * @type boolean
     * @private
     */
    transitionsEnabled: computed.reads('fade'),

    /**
     * Access to the fastboot service if available
     *
     * @property fastboot
     * @type {Ember.Service}
     * @private
     */
    fastboot: _ember['default'].computed(function () {
      var owner = _ember['default'].getOwner(this);
      return owner.lookup('service:fastboot');
    }),

    /**
     * Use CSS transitions?
     *
     * @property usesTransition
     * @type boolean
     * @readonly
     * @private
     */
    usesTransition: computed('fade', 'fastboot.isFastBoot', function () {
      return !this.get('fastboot.isFastBoot') && !!_emberBootstrapUtilsTransitionSupport['default'] && this.get('transitionsEnabled');
    })
  });
});