define('ember-bootstrap/components/bs-accordion', ['exports', 'ember-bootstrap/components/base/bs-accordion'], function (exports, _emberBootstrapComponentsBaseBsAccordion) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsAccordion['default'].extend({
    classNames: ['panel-group']
  });
});