import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(/* transition */) {
    this.transitionTo('intro'); // Implicitly aborts the on-going transition.
  }
});
