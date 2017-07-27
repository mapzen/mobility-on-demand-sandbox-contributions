import Ember from 'ember';
import Checkbox from '../mixins/checkbox';

export default Ember.Component.extend(Checkbox, {
  type: 'checkbox',
  ignorableAttrs: ['checked', 'label', 'disabled'],

  // Internal wrapper for onchange, to pass through checked
  _onChange: function _onChange() {
    var checked = this.execute('is checked');
    return this.attrs.onChange(checked, this);
  }
});