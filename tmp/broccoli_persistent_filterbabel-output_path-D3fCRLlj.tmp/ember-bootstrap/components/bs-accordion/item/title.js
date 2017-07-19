define('ember-bootstrap/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/base/bs-accordion/item/title'], function (exports, _emberBootstrapComponentsBaseBsAccordionItemTitle) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsAccordionItemTitle['default'].extend({
    classNames: ['panel-heading']
  });
});