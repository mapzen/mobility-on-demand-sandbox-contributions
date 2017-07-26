define('ember-bootstrap/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/base/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBaseBsTooltipElement) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsTooltipElement['default'].extend({
    classNameBindings: ['placement', 'showHelp:in']
  });
});