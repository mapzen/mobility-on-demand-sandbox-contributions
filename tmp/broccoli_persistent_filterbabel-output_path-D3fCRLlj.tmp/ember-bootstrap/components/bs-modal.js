define('ember-bootstrap/components/bs-modal', ['exports', 'ember-bootstrap/components/base/bs-modal'], function (exports, _emberBootstrapComponentsBaseBsModal) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsModal['default'].extend({
    showClass: 'in'
  });
});