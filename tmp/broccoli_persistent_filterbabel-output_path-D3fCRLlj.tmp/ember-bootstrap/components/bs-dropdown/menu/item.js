define('ember-bootstrap/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBaseBsDropdownMenuItem) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsDropdownMenuItem['default'].extend({
    tagName: 'li'
  });
});