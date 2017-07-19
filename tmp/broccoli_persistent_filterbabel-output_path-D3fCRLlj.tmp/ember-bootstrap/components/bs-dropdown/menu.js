define('ember-bootstrap/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBaseBsDropdownMenu) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsDropdownMenu['default'].extend({
    tagName: 'ul'
  });
});