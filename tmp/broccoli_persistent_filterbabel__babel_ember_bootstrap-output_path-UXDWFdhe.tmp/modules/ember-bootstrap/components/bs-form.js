import Ember from 'ember';
import Form from 'ember-bootstrap/components/base/bs-form';

var computed = Ember.computed;


export default Form.extend({
  layoutClass: computed('formLayout', function () {
    var layout = this.get('formLayout');
    return layout === 'vertical' ? 'form' : 'form-' + layout;
  }).readOnly()
});