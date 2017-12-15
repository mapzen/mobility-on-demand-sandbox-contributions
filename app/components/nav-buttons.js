import Ember from 'ember';

export default Ember.Component.extend({
  next: null,
  back: null,
  forwardButtonText: "Next",
  backwardsButtonText: "Back",
  actions: {
    sendChangeRoute: function(route, changeset){
      this.sendAction('sendChangeRoute', route, changeset);
    }
  }
});