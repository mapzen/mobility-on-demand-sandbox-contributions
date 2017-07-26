define('ember-bootstrap/components/base/bs-modal/header/title', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-modal/header/title'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsModalHeaderTitle) {
  'use strict';

  /**
  
   @class ModalHeaderTitle
   @namespace Components
   @extends Ember.Component
   @private
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsModalHeaderTitle['default'],
    tagName: 'h4',
    classNames: ['modal-title']
  });
});