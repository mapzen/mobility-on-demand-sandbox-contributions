import Ember from 'ember';

export default Ember.Route.extend({
  getWebServiceResponse: function(request){
    var url = request;
    return Ember.$.ajax({ url })
  },
  model: function(){
    return this.get('store').peekAll('submission').get('firstObject');
  }
});