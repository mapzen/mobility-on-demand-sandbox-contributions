import Ember from 'ember';

export default Ember.Component.extend({
  showAdditionalJoinDropdown: null,
  properties: null,
  user_data: Ember.computed('model.webServiceResponse', function(){
    return this.model.webServiceResponse.source_data.results;
  }),
  columnHeadings: Ember.computed('model.submission', function(){
    return this.model.webServiceResponse.source_data.fields;
  }),
  remainingColumnHeadings: Ember.computed('properties.fields.[]', function(){
    var headings = this.properties.fields;
    var fields = this.model.webServiceResponse.source_data.fields;
    var unselectedFields = [];
    for (var i = 0; i < fields.length; i++){
      if (headings.indexOf(fields[i]) === -1){
        unselectedFields.push(fields[i]);
      }
    }
    return unselectedFields;
  }),
  actions: {
    editField: function(heading, index, column){
      this.model.submission.get('oaFields')[heading].fields.replace(index, 1, column);
      for (var i = 0; i < 2; i++){
        this.model.submission.get('exampleRows')[i][heading].replace(index, 1, this.model.webServiceResponse.source_data.results[i][column])
      }
    },
    addField: function(heading, column){
      this.set('showAdditionalJoinDropdown', false);
      this.model.submission.get('oaFields')[heading].fields.addObject(column)
      for (var i = 0; i < 2; i++){
        this.model.submission.get('exampleRows')[i][heading].addObject(this.model.webServiceResponse.source_data.results[i][column]);
      }
      this.set('showAdditionalJoinButton', true)
    },
    removeField: function(heading, column){
      this.model.submission.get('oaFields')[heading].fields.removeObject(column);
      for (var i = 0; i < 2; i++){
        this.model.submission.get('exampleRows')[i][heading].removeObject(this.model.webServiceResponse.source_data.results[i][column]);
      }
    },
    addJoin: function(){
      this.set('showAdditionalJoinDropdown', true);
      this.set('showAdditionalJoinButton', false);
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
  }
  
});
