define('ember-bootstrap/components/base/bs-form/element/feedback-icon', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/element/feedback-icon'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsFormElementFeedbackIcon) {
  'use strict';

  /**
  
   @class FormElementFeedbackIcon
   @namespace Components
   @extends Ember.Component
   @private
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsFormElementFeedbackIcon['default'],
    tagName: '',

    /**
     * @property show
     * @type {Boolean}
     * @public
     */
    show: false,

    /**
     * @property iconName
     * @type {String}
     * @public
     */
    iconName: null
  });
});