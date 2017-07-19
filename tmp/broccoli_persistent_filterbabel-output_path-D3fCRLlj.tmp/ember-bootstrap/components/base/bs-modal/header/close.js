define('ember-bootstrap/components/base/bs-modal/header/close', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/header/close'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsModalHeaderClose) {
  'use strict';

  /**
  
   @class ModalHeaderClose
   @namespace Components
   @extends Ember.Component
   @private
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsModalHeaderClose['default'],
    tagName: 'button',
    classNames: ['close'],
    attributeBindings: ['type', 'aria-label'],
    'aria-label': 'Close',
    type: 'button',

    /**
     * @event onClick
     * @public
     */
    onClick: function onClick() {},
    click: function click() {
      this.get('onClick')();
    }
  });
});