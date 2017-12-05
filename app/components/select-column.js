import Ember from 'ember';

export default Ember.Component.extend({
  field: null,
  user_data: Ember.computed('model.webServiceResponse', function(){
    return this.model.webServiceResponse.source_data.results;
  }),
  actions: {
    chooseField: function(heading, column){
      Ember.set(this.model.submission.get('oaFields')[heading], "fields", []);
      this.model.submission.get('oaFields')[heading].fields.addObject(column);
      for (var i = 0; i < 2; i++){
        Ember.set(this.model.submission.get('exampleRows')[i], heading, [this.model.webServiceResponse.source_data.results[i][column]]);
      }
    }
  }
});