define('ember-bootstrap/components/base/bs-form/element/help-text', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/element/help-text'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsFormElementHelpText) {
  'use strict';

  /**
  
   @class FormElementHelpText
   @namespace Components
   @extends Ember.Component
   @private
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsFormElementHelpText['default'],

    /**
     * @property text
     * @type {string}
     * @public
     */
    text: null
  });
});