define('ember-bootstrap/components/base/bs-modal/header', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/header'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsModalHeader) {
  'use strict';

  /**
  
   Modal header element used within [Components.Modal](Components.Modal.html) components. See there for examples.
  
   @class ModalHeader
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsModalHeader['default'],
    classNames: ['modal-header'],

    /**
     * Show a close button (x icon)
     *
     * @property closeButton
     * @type boolean
     * @default true
     * @public
     */
    closeButton: true,

    /**
     * The title to display in the modal header
     *
     * @property title
     * @type string
     * @default null
     * @public
     */
    title: null,

    /**
     * @event onClose
     * @public
     */
    onClose: function onClose() {}
  });
});