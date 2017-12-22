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
  showErrorState: false,
  showMore: false,
  errorMessages: [],
  resetErrorState: function () {
    Ember.set(this, 'showErrorState', false);
    Ember.set(this, 'errorMessages', []);
  },
  actions: {
    toggleShowMore: function() {
      console.log(this.showMore);
      this.set('showMore', !this.showMore);
      console.log(this.showMore);
    },
    goToField: function(field){
      this.set('currentField', field);
    },
    prevField: function() {
      this.resetErrorState();
      this.set('currentField', this.get('prevField'));
    },
    nextField: function(){
      this.resetErrorState();
      this.set('currentField', this.get('nextField'));
    },
    chooseField: function(heading, column){
      Ember.set(this.model.submission.get('oaFields')[heading], "fields", []);
      this.model.submission.get('oaFields')[heading].fields.addObject(column);
      for (var i = 0; i < 2; i++){
        Ember.set(this.model.submission.get('exampleRows')[i], heading, [this.model.webServiceResponse.source_data.results[i][column]]);
      }
      this.resetErrorState();
    },
    addFunction: function(field, action){
      if (this.model.submission.get('oaFields')[field].fields.length > 0){
        this.resetErrorState();
        Ember.set(this.model.submission.get('oaFields')[field], "function", action);
        if (action === "join"){
          this.set('showAdditionalJoinDropdown', true);
        }
      } else {
        this.set('showErrorState', true);
        this.set('errorMessages', ['Select a column from the drop down to proceed']);
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
        if (this.model.submission.get('oaFields')[field].prefix_or_postfix){
          Ember.set(this.model.submission.get('oaFields')[field], "prefix_or_postfix", null);
        }
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
