define('ember-bootstrap/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/base/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBaseBsNavbarToggle) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsNavbarToggle['default'].extend({
    classNames: ['navbar-toggle']
  });
});