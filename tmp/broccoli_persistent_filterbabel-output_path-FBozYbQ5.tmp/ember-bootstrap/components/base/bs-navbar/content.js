define('ember-bootstrap/components/base/bs-navbar/content', ['exports', 'ember-bootstrap/templates/components/bs-navbar/content', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapTemplatesComponentsBsNavbarContent, _emberBootstrapComponentsBsCollapse) {
  'use strict';

  /**
   * Component to wrap the collapsible content of a [Components.Navbar](Components.Navbar.html) component.
   * Have a look there for examples.
   *
   * @class NavbarContent
   * @namespace Components
   * @extends Components.Collapse
   * @public
   */
  exports['default'] = _emberBootstrapComponentsBsCollapse['default'].extend({
    layout: _emberBootstrapTemplatesComponentsBsNavbarContent['default'],

    classNames: ['navbar-collapse']
  });
});