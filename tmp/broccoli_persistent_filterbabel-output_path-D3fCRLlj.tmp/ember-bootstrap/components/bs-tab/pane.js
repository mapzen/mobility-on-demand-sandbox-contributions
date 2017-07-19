define('ember-bootstrap/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/base/bs-tab/pane'], function (exports, _emberBootstrapComponentsBaseBsTabPane) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsTabPane['default'].extend({
    classNameBindings: ['showContent:in']
  });
});