define('ember-bootstrap/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/base/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBaseBsModalDialog) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsModalDialog['default'].extend({
    classNameBindings: ['showModal:in']
  });
});