import Ember from 'ember';

var next = Ember.run.next;

/**
 * Mixin for components that act as dropdown toggles.
 *
 * @class DropdownToggle
 * @namespace Mixins
 * @private
 */

export default Ember.Mixin.create({
  classNames: ['dropdown-toggle'],

  /**
   * @property ariaRole
   * @default button
   * @type string
   * @protected
   */
  ariaRole: 'button',

  /**
   * Reference to the parent dropdown component
   *
   * @property dropdown
   * @type {Components.Dropdown}
   * @private
   */
  dropdown: null,

  didReceiveAttrs: function didReceiveAttrs() {
    this._super.apply(this, arguments);
    var dropdown = this.get('dropdown');
    if (dropdown) {
      next(this, function () {
        if (!this.get('isDestroyed')) {
          dropdown.set('toggle', this);
        }
      });
    }
  }
});