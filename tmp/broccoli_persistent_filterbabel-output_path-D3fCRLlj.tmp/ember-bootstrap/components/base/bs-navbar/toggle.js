define('ember-bootstrap/components/base/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-button', 'ember-bootstrap/templates/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsButton, _emberBootstrapTemplatesComponentsBsNavbarToggle) {
  'use strict';

  /**
   * Component to implement the responsive menu toggle behavior in a [Components.Navbar](Components.Navbar.html)
   * component. Have a look there for examples.
   *
   * ### Bootstrap 3/4 Notes
   *
   * The inline version of the component uses the triple `icon-bar` styling for Bootstrap 3 and the
   * `navbar-toggler-icon` styling for Bootstrap 4.
   *
   * @class NavbarToggle
   * @namespace Components
   * @extends Components.Button
   * @public
   */
  exports['default'] = _emberBootstrapComponentsBsButton['default'].extend({
    layout: _emberBootstrapTemplatesComponentsBsNavbarToggle['default'],

    classNameBindings: ['collapsed'],
    collapsed: true

    /**
     * Bootstrap 4 Only: Defines the alignment of the toggler. Valid values are 'left' and 'right'
     * to set the `navbar-toggler-*` class.
     *
     * @property align
     * @type String
     * @default null
     * @public
     */

  });
});