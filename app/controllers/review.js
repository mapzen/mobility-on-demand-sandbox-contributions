import Ember from 'ember';
import sharedActions from '../mixins/shared-actions';


export default Ember.Controller.extend(sharedActions, {
  actions: {
    openModal: function(name) {
      /*eslint-disable */
      $('.ui.' + name + '.modal').modal('show');
      /*eslint-enable */
    },
    approveModal: function(element, component) {
      /*eslint-disable */
      $('.ui.modal').modal('toggle', element, component);
      /*eslint-enable */
      this.get('store').unloadAll('submission');
      this.transitionToRoute('intro');
    },
    denyModal: function() {
      return true;
    },
    changeRoute: function(route){
      this.transitionToRoute(route);
    },
    editField: function(route){
      this.transitionToRoute(route);
    },
    submit: function(){
      // communicate with backend here
      debugger;
      this.transitionToRoute("success");
    }
  }
});
