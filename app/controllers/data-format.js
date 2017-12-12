import Ember from 'ember';
import sharedActions from '../mixins/shared-actions';

export default Ember.Controller.extend(sharedActions, {
  columns: null,
  columnHeadings: Ember.computed('model.source_data_fields', function(){
    return this.model.source_data_fields;
  }),
  showAdditionalJoinButton: false,
  user_data: Ember.computed('model.source_data_results', function(){
    return this.model.source_data_results;
  }),
  currentField: Ember.computed('model.type', function(){
    if (this.model.type === "csv"){
      return "lon";
    } else {
      return "number";
    }
  }),
  prevField: Ember.computed('currentField', function() {
    var prevFields = {
      lat: "lon",
      "number": "lat",
      "street": "number",
      "unit": "street",
      "city": "unit",
      "district": "city",
      "region": "district",
      "postcode": "region"
    };
    return prevFields[this.get('currentField')];
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
    prevField: function() {
      this.set('currentField', this.get('prevField'));
    },
    nextField: function(){
      this.set('currentField', this.get('nextField'));
    },
    addFunction: function(field, action){
      Ember.set(this.model.get('oaFields')[field], "function", action);
      if (action === "join"){
        this.set('showAdditionalJoinDropdown', true);
      }
    },
    removeFunction: function(field){
      if (this.model.get('oaFields')[field].function === "join" && this.model.get('oaFields')[field].fields.length > 1){
        Ember.set(this.model.get('oaFields')[field], "fields", [this.model.get('oaFields')[field].fields[0]]);
        this.set('showAdditionalJoinButton', false);
        Ember.set(this.model.get('oaFields')[field], "function", null);
        this.set('showAdditionalJoinDropdown', false);
      } else if (this.model.get('oaFields')[field].function !== "join" && this.model.get('oaFields')[field].function !== "split"){
        Ember.set(this.model.get('oaFields')[field], "function", "split");
      } else {
        Ember.set(this.model.get('oaFields')[field], "function", null);
      }
      for (var i = 0; i < 2; i++){
        var originalColumn = this.model.get('oaFields')[field].fields[0]
        Ember.set(this.model.get('exampleRows')[i], field, [this.model.get('source_data_results')[i][originalColumn]]);
      }
    },
    changeRoute: function(route){
      this.transitionToRoute(route);
    }
  }
});
