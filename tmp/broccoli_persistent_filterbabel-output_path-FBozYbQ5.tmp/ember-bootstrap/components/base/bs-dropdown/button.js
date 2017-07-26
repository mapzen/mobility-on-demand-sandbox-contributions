define('ember-bootstrap/components/base/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-button', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _emberBootstrapComponentsBsButton, _emberBootstrapMixinsDropdownToggle) {
  'use strict';

  /**
   Button component with that can act as a dropdown toggler.
  
   See [Components.Dropdown](Components.Dropdown.html) for examples.
  
   @class DropdownButton
   @namespace Components
   @extends Components.Button
   @uses Mixins.DropdownToggle
   @public
   */
  exports['default'] = _emberBootstrapComponentsBsButton['default'].extend(_emberBootstrapMixinsDropdownToggle['default']);
});