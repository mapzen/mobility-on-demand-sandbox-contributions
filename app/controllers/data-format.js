import Ember from 'ember';
import sharedActions from '../mixins/shared-actions';

export default Ember.Controller.extend(sharedActions, {
  columns: null,
  columnHeadings: Ember.computed('model.webServiceResponse', function(){
    return this.model.webServiceResponse.source_data.fields;
  }),
  showAdditionalJoinButton: false,
  user_data: Ember.computed('model.webServiceResponse', function(){
    return this.model.webServiceResponse.source_data.results;
  }),
  currentField: Ember.computed('model.webServiceResponse', function(){
    if (this.model.webServiceResponse.conform.type === "csv"){
      return "lon";
    } else {
      return "number";
    }
  }),
  nextField: Ember.computed('currentField', function(){
    var nextFields = {
      "lon": "lat",
      "lat": "number",
      "number": "street",
      "street": "unit",
      "unit": "city",
      "city": "district",
      "district": "region",
      "region": "postcode"
    };
    return nextFields[this.get('currentField')];
  }),
  actions: {
    goToField: function(field){
      this.set('currentField', field);
    },
    nextField: function(){
      this.set('currentField', this.get('nextField'));
    },
    addFunction: function(field, action){
      Ember.set(this.model.submission.get('oaFields')[field], "function", action);
      if (action === "join"){
        this.set('showAdditionalJoinDropdown', true);
      }
    },
    removeFunction: function(field){
      if (this.model.submission.get('oaFields')[field].function === "join" && this.model.submission.get('oaFields')[field].fields.length > 1){
        Ember.set(this.model.submission.get('oaFields')[field], "fields", [this.model.submission.get('oaFields')[field].fields[0]]);
        this.set('showAdditionalJoinButton', false);
        Ember.set(this.model.submission.get('oaFields')[field], "function", null);
        this.set('showAdditionalJoinDropdown', false);
      } else if (this.model.submission.get('oaFields')[field].function !== "join" && this.model.submission.get('oaFields')[field].function !== "split"){
        Ember.set(this.model.submission.get('oaFields')[field], "function", "split");
      } else {
        Ember.set(this.model.submission.get('oaFields')[field], "function", null);
      }
      for (var i = 0; i < 2; i++){
        var originalColumn = this.model.submission.get('oaFields')[field].fields[0]
        Ember.set(this.model.submission.get('exampleRows')[i], field, [this.model.webServiceResponse.source_data.results[i][originalColumn]]);
      }
    },
    changeRoute: function(route){
      this.transitionToRoute(route);
    }
  }
});