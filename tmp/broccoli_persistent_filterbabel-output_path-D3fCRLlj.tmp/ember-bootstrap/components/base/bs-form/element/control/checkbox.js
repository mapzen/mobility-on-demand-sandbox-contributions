define('ember-bootstrap/components/base/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/control', 'ember-bootstrap/mixins/control-attributes'], function (exports, _emberBootstrapComponentsBaseBsFormElementControl, _emberBootstrapMixinsControlAttributes) {
  'use strict';

  /**
  
   @class FormElementControlCheckbox
   @namespace Components
   @extends Components.FormElementControl
   @private
   */
  exports['default'] = _emberBootstrapComponentsBaseBsFormElementControl['default'].extend(_emberBootstrapMixinsControlAttributes['default'], {
    attributeBindings: ['value:checked', 'type'],

    /**
     * @property type
     * @type {String}
     * @readonly
     * @private
     */
    type: 'checkbox',

    click: function click(event) {
      this.get('onChange')(event.target.checked);
    }
  });
});