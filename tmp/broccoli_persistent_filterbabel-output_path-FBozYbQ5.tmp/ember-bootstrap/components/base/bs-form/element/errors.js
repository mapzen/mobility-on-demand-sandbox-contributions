define('ember-bootstrap/components/base/bs-form/element/errors', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/element/errors'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsFormElementErrors) {
  'use strict';

  /**
  
   @class FormElementErrors
   @namespace Components
   @extends Ember.Component
   @private
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsFormElementErrors['default'],
    tagName: '',

    /**
     * @property show
     * @type {Boolean}
     * @public
     */
    show: false,

    /**
     * @property messages
     * @type {Ember.Array}
     * @public
     */
    messages: null
  });
});