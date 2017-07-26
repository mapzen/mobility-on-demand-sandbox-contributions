define('ember-bootstrap/components/bs-form/group', ['exports', 'ember', 'ember-bootstrap/components/base/bs-form/group'], function (exports, _ember, _emberBootstrapComponentsBaseBsFormGroup) {
  'use strict';

  var computed = _ember['default'].computed;

  exports['default'] = _emberBootstrapComponentsBaseBsFormGroup['default'].extend({
    classNames: ['form-group'],
    classNameBindings: ['hasFeedback'],

    classTypePrefix: 'form-group',

    _validationType: computed.readOnly('validation')
  });
});