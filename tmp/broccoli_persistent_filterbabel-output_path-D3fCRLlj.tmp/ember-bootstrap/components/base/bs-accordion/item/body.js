define('ember-bootstrap/components/base/bs-accordion/item/body', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-accordion/body'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsAccordionBody) {
  'use strict';

  /**
   Component for an accordion item body.
  
   See [Components.Accordion](Components.Accordion.html) for examples.
  
   @class AccordionBody
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsAccordionBody['default'],
    tagName: '',

    /**
     * @property collapsed
     * @type boolean
     * @public
     */
    collapsed: null

  });
});