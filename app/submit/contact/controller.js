import Ember from 'ember';
import sharedActions from 'mod-sandbox/mixins/shared-actions';


export default Ember.Controller.extend(sharedActions, {
	email: null,
	actions: {
		submit: function(){
			console.log("submit");
		}
	}
});
