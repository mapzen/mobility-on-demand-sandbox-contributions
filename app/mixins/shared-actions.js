import Ember from 'ember';

export default Ember.Mixin.create({
	actions: {
		changeRoute: function(route){
			this.transitionToRoute(route);
		}
	}
});