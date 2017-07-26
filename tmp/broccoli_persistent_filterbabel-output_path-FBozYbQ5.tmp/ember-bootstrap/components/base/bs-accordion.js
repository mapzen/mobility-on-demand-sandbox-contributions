define('ember-bootstrap/components/base/bs-accordion', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-accordion', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsAccordion, _emberBootstrapUtilsListenToCp) {
  'use strict';

  /**
   Bootstrap-style [accordion group](http://getbootstrap.com/javascript/#collapse-example-accordion),
   with collapsible/expandable items.
  
   ### Usage
  
   Use as a block level component with any number of yielded [Components.AccordionItem](Components.AccordionItem.html)
   components as children:
  
   ```handlebars
    {{#bs-accordion as |acc|}}
        {{#acc.item value=1 title="First item"}}
          <p>Lorem ipsum...</p>
          <button {{action acc.change 2}}>Next</button>
        {{/acc.item}}
        {{#acc.item value=2 title="Second item"}}
          <p>Lorem ipsum...</p>
        {{/acc.item}}
        {{#acc.item value=3 title="Third item"}}
          <p>Lorem ipsum...</p>
        {{/acc.item}}
    {{/bs-accordion}}
   ```
  
   In the example above the first accordion item utilizes the yielded `change` action to add some custom behaviour.
  
   @class Accordion
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsAccordion['default'],
    ariaRole: 'tablist',

    /**
     * The value of the currently selected accordion item. Set this to change selection programmatically.
     *
     * When the selection is changed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onChange` action
     *
     * @property selected
     * @public
     */
    selected: null,

    /**
     * The value of the currently selected accordion item
     *
     * @property isSelected
     * @private
     */
    isSelected: (0, _emberBootstrapUtilsListenToCp['default'])('selected'),

    /**
     * Action when the selected accordion item is about to be changed.
     *
     * You can return false to prevent changing the active item, and do that in your action by
     * setting the `selected` accordingly.
     *
     * @event onChange
     * @param newValue
     * @param oldValue
     * @public
     */
    onChange: function onChange(newValue, oldValue) {},
    // eslint-disable-line no-unused-vars

    actions: {
      change: function change(newValue) {
        var oldValue = this.get('isSelected');
        if (oldValue === newValue) {
          newValue = null;
        }
        if (this.get('onChange')(newValue, oldValue) !== false) {
          this.set('isSelected', newValue);
        }
      }
    }

  });
});