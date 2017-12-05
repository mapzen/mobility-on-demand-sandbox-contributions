import Ember from 'ember';

export default Ember.Route.extend({
  getWebServiceResponse: function(request){
    var url = request;
    return Ember.$.ajax({ url })
  },
  model: function(){
    // for development, remove before merging
    // this.store.createRecord('submission');
    
    
    var submission = this.get('store').peekAll('submission').get('firstObject');
    // request will change once app is set up to work with web service
    // var request = submission.data_url;
    var request = 'api/responses';

    var webServiceResponse = this.getWebServiceResponse(request);
      
    return Ember.RSVP.hash({
      submission: submission,
      webServiceResponse: webServiceResponse
    })
  }
});