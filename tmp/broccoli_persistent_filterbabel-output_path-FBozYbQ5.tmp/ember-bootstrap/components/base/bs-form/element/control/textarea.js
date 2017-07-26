define('ember-bootstrap/components/base/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/base/bs-form/element/control', 'ember-bootstrap/mixins/control-attributes'], function (exports, _emberBootstrapComponentsBaseBsFormElementControl, _emberBootstrapMixinsControlAttributes) {
  'use strict';

  /**
  
   @class FormElementControlTextarea
   @namespace Components
   @extends Components.FormElementControl
   @private
   */
  exports['default'] = _emberBootstrapComponentsBaseBsFormElementControl['default'].extend(_emberBootstrapMixinsControlAttributes['default'], {
    attributeBindings: ['value', 'placeholder', 'minlength', 'maxlength', 'autocomplete', 'spellcheck', 'rows', 'cols', 'wrap'],
    tagName: 'textarea',
    classNames: ['form-control'],

    change: function change(event) {
      this.get('onChange')(event.target.value);
    },
    input: function input(event) {
      this.get('onChange')(event.target.value);
    }
  });
});