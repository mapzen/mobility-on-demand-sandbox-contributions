define('ember-bootstrap/components/bs-collapse', ['exports', 'ember-bootstrap/components/base/bs-collapse'], function (exports, _emberBootstrapComponentsBaseBsCollapse) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsCollapse['default'].extend({
    classNameBindings: ['showContent:in']
  });
});