import Ember from 'ember';

export default Ember.Component.extend({
	next: null,
	back: null,
	actions: {
		sendChangeRoute: function(route){
			this.sendAction('sendChangeRoute', route);
		}
	}
});
