define('ember-bootstrap/components/base/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/inline', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical/checkbox'], function (exports, _emberBootstrapComponentsBaseBsFormElementLayoutInline, _emberBootstrapTemplatesComponentsBsFormElementLayoutVerticalCheckbox) {
  'use strict';

  /**
  
   @class FormElementLayoutInlineCheckbox
   @namespace Components
   @extends Components.FormElementLayout
   @private
   */
  exports['default'] = _emberBootstrapComponentsBaseBsFormElementLayoutInline['default'].extend({
    layout: _emberBootstrapTemplatesComponentsBsFormElementLayoutVerticalCheckbox['default']
  });
});