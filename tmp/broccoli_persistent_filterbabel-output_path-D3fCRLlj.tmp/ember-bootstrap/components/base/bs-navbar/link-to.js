define('ember-bootstrap/components/base/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  'use strict';

  /**
   * Extended `{{link-to}}` component for use within Navbars.
   *
   * @class NavbarLinkTo
   * @namespace Components
   * @extends Components.NavLinkTo
   * @public
   */
  exports['default'] = _emberBootstrapComponentsBsNavLinkTo['default'].extend({

    /**
     * @property collapseNavbar
     * @type {Boolean}
     * @default true
     * @public
     */
    collapseNavbar: true,

    /**
     * @event onCollapse
     * @private
     */
    onCollapse: function onCollapse() {},
    click: function click() {
      if (this.get('collapseNavbar')) {
        this.onCollapse();
      }
    }
  });
});