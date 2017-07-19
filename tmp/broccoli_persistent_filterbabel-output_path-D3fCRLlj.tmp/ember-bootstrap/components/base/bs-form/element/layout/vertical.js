define('ember-bootstrap/components/base/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical'], function (exports, _emberBootstrapComponentsBaseBsFormElementLayout, _emberBootstrapTemplatesComponentsBsFormElementLayoutVertical) {
  'use strict';

  /**
  
   @class FormElementLayoutVertical
   @namespace Components
   @extends Components.FormElementLayout
   @private
   */
  exports['default'] = _emberBootstrapComponentsBaseBsFormElementLayout['default'].extend({
    layout: _emberBootstrapTemplatesComponentsBsFormElementLayoutVertical['default']
  });
});