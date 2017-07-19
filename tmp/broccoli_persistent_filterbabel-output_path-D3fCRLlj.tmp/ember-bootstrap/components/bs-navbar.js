define('ember-bootstrap/components/bs-navbar', ['exports', 'ember-bootstrap/components/base/bs-navbar'], function (exports, _emberBootstrapComponentsBaseBsNavbar) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsNavbar['default'].extend({
    _validPositions: ['fixed-top', 'fixed-bottom', 'static-top'],

    _positionPrefix: 'navbar-'
  });
});