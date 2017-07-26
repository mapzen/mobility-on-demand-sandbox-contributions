define('ember-bootstrap/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/base/bs-accordion/item'], function (exports, _emberBootstrapComponentsBaseBsAccordionItem) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsAccordionItem['default'].extend({
    classNames: ['panel'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'panel'
     * @protected
     */
    classTypePrefix: 'panel'
  });
});