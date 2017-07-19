define('ember-bootstrap/components/bs-dropdown', ['exports', 'ember-bootstrap/components/base/bs-dropdown'], function (exports, _emberBootstrapComponentsBaseBsDropdown) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsDropdown['default'].extend({
    classNameBindings: ['isOpen:open']
  });
});