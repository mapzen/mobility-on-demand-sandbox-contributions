import Ember from 'ember';
import Base from '../mixins/base';

export default Ember.Component.extend(Base, {
  module: 'rating',
  classNames: ['ui', 'rating'],
  ignorableAttrs: ['rating'],

  willInitSemantic: function willInitSemantic(settings) {
    this._super.apply(this, arguments);
    if (settings.initialRating == null && this.get('rating')) {
      settings.initialRating = this.get('rating');
    }
  }
});