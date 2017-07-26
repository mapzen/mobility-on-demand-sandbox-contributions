define('ember-bootstrap/components/bs-nav', ['exports', 'ember-bootstrap/components/base/bs-nav'], function (exports, _emberBootstrapComponentsBaseBsNav) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsNav['default'].extend({
    classNameBindings: ['stacked:nav-stacked']
  });
});