define('ember-bootstrap/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/base/bs-form/element/errors'], function (exports, _emberBootstrapComponentsBaseBsFormElementErrors) {
  'use strict';

  exports['default'] = _emberBootstrapComponentsBaseBsFormElementErrors['default'].extend({
    feedbackClass: 'help-block'
  });
});