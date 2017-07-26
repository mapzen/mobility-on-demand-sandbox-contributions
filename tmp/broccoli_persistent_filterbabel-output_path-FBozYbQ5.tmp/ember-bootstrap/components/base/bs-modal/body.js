define('ember-bootstrap/components/base/bs-modal/body', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/body'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsModalBody) {
  'use strict';

  /**
  
   Modal body element used within [Components.Modal](Components.Modal.html) components. See there for examples.
  
   @class ModalBody
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsModalBody['default'],
    classNames: ['modal-body']
  });
});