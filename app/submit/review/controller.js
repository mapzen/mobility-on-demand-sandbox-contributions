import Ember from 'ember';
import sharedActions from 'mod-sandbox/mixins/shared-actions';


export default Ember.Controller.extend(sharedActions, {
	actions: {
		submit: function(){
			console.log("submitted");
			this.transitionToRoute('submit.success');
		}
	}
});
