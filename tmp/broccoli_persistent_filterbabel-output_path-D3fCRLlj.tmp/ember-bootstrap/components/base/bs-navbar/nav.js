define('ember-bootstrap/components/base/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  'use strict';

  /**
   * Component for the `.nav` element within a [Components.Navbar](Components.Navbar.html)
   * component. Have a look there for examples.
   *
   * Per [the bootstrap docs](http://getbootstrap.com/components/#navbar),
   * justified navbar nav links are not supported.
   *
   * @class NavbarNav
   * @namespace Components
   * @extends Components.Nav
   * @public
   */
  exports['default'] = _emberBootstrapComponentsBsNav['default'].extend({
    classNames: ['navbar-nav'],

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this.set('justified', false);
    }
  });
});