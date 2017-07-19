define('ember-bootstrap/components/base/bs-dropdown/toggle', ['exports', 'ember', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _ember, _emberBootstrapMixinsDropdownToggle) {
  'use strict';

  var computed = _ember['default'].computed;

  /**
   Anchor element that triggers the parent dropdown to open.
   Use [Components.DropdownButton](Components.DropdownButton.html) if you want a button instead of an anchor tag.
  
   See [Components.Dropdown](Components.Dropdown.html) for examples.
  
   @class DropdownToggle
   @namespace Components
   @extends Ember.Component
   @uses Mixins.DropdownToggle
   @public
   */

  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsDropdownToggle['default'], {
    /**
     * Defaults to a `<a>` tag. Change for other types of dropdown toggles.
     *
     * @property tagName
     * @type string
     * @default a
     * @public
     */
    tagName: 'a',

    attributeBindings: ['href'],

    /**
     * Computed property to generate a `href="#"` attribute when `tagName` is "a".
     *
     * @property href
     * @type string
     * @readonly
     * @private
     */
    href: computed('tagName', function () {
      if (this.get('tagName').toUpperCase() === 'A') {
        return '#';
      }
    }),

    /**
     * When clicking the toggle this action is called.
     *
     * @event onClick
     * @param {*} value
     * @public
     */
    onClick: function onClick() {},
    click: function click(e) {
      e.preventDefault();
      this.get('onClick')();
    }
  });
});