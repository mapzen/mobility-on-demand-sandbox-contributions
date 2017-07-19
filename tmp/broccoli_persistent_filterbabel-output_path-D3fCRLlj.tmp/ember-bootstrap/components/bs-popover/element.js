define('ember-bootstrap/components/bs-popover/element', ['exports', 'ember-bootstrap/components/base/bs-popover/element'], function (exports, _emberBootstrapComponentsBaseBsPopoverElement) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsPopoverElement['default'].extend({
    classNameBindings: ['placement', 'showHelp:in']
  });
});