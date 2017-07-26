define('ember-bootstrap/components/base/bs-accordion/item/title', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-accordion/title'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsAccordionTitle) {
  'use strict';

  /**
   Component for an accordion item title.
  
   See [Components.Accordion](Components.Accordion.html) for examples.
  
   @class AccordionTitle
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsAccordionTitle['default'],
    ariaRole: 'tab',
    classNameBindings: ['collapsed:collapsed:expanded'],

    /**
     * @property collapsed
     * @type boolean
     * @public
     */
    collapsed: null,

    /**
     * @event onClick
     * @public
     */
    onClick: function onClick() {},
    click: function click(e) {
      e.preventDefault();
      this.get('onClick')();
    }
  });
});