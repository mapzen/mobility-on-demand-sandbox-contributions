define('ember-bootstrap/components/bs-alert', ['exports', 'ember-bootstrap/components/base/bs-alert'], function (exports, _emberBootstrapComponentsBaseBsAlert) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsAlert['default'].extend({
    classNameBindings: ['showAlert:in']
  });
});