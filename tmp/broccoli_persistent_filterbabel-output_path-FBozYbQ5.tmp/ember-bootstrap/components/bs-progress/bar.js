define('ember-bootstrap/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/base/bs-progress/bar'], function (exports, _emberBootstrapComponentsBaseBsProgressBar) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsProgressBar['default'].extend({
    classNameBindings: ['progressBarAnimate:active'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'progress-bar'
     * @protected
     */
    classTypePrefix: 'progress-bar'
  });
});