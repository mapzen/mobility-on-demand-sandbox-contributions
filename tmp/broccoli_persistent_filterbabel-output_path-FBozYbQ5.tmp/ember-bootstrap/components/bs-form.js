define('ember-bootstrap/components/bs-form', ['exports', 'ember', 'ember-bootstrap/components/base/bs-form'], function (exports, _ember, _emberBootstrapComponentsBaseBsForm) {
  'use strict';

  var computed = _ember['default'].computed;

  exports['default'] = _emberBootstrapComponentsBaseBsForm['default'].extend({
    layoutClass: computed('formLayout', function () {
      var layout = this.get('formLayout');
      return layout === 'vertical' ? 'form' : 'form-' + layout;
    }).readOnly()
  });
});