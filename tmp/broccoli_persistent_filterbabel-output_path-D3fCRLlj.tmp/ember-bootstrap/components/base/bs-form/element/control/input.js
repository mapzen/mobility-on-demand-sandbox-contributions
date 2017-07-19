define('ember-bootstrap/components/base/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/base/bs-form/element/control', 'ember-bootstrap/mixins/control-attributes'], function (exports, _emberBootstrapComponentsBaseBsFormElementControl, _emberBootstrapMixinsControlAttributes) {
  'use strict';

  /**
  
   @class FormElementControlInput
   @namespace Components
   @extends Components.FormElementControl
   @private
   */
  exports['default'] = _emberBootstrapComponentsBaseBsFormElementControl['default'].extend(_emberBootstrapMixinsControlAttributes['default'], {
    attributeBindings: ['value', 'type', 'placeholder', 'size', 'minlength', 'maxlength', 'min', 'max', 'pattern', 'accept', 'autocomplete', 'autosave', 'inputmode', 'multiple', 'step', 'spellcheck'],
    classNames: ['form-control'],

    /**
     * @property type
     * @type {String}
     * @public
     */
    type: 'text',

    change: function change(event) {
      this.get('onChange')(event.target.value);
    },
    input: function input(event) {
      this.get('onChange')(event.target.value);
    }
  });
});