define('ember-bootstrap/mixins/control-attributes', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * Mixin for control components to add standard HTML attributes
   *
   * @class ControlAttributes
   * @namespace Mixins
   * @private
   */
  exports['default'] = _ember['default'].Mixin.create({
    attributeBindings: ['name', 'autofocus', 'disabled', 'readonly', 'required', 'tabindex', 'form', 'title', 'ariaDescribedBy:aria-describedby'],
    tagName: 'input'
  });
});