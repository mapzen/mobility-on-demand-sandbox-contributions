define('ember-bootstrap/components/base/bs-dropdown/menu', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-dropdown/menu'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsDropdownMenu) {
  'use strict';

  var computed = _ember['default'].computed;

  /**
   Component for the dropdown menu.
  
   See [Components.Dropdown](Components.Dropdown.html) for examples.
  
   @class DropdownMenu
   @namespace Components
   @extends Ember.Component
   @public
   */

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsDropdownMenu['default'],

    /**
     * Defaults to a `<ul>` tag in BS3 and a '<div>' tag in BS4. Change for other types of dropdown menus.
     *
     * @property tagName
     * @type string
     * @default ul
     * @public
     */

    classNames: ['dropdown-menu'],
    classNameBindings: ['alignClass'],

    /**
     * @property ariaRole
     * @default menu
     * @type string
     * @protected
     */
    ariaRole: 'menu',

    /**
     * Alignment of the menu, either "left" or "right"
     *
     * @property align
     * @type string
     * @default left
     * @public
     */
    align: 'left',

    alignClass: computed('align', function () {
      if (this.get('align') !== 'left') {
        return 'dropdown-menu-' + this.get('align');
      }
    })
  });
});