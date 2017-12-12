import Ember from 'ember';

export default Ember.Component.extend({
  field: null,
  actions: {
    chooseField: function(heading, column){
      Ember.set(this.model.get('oaFields')[heading], "fields", []);
      this.model.get('oaFields')[heading].fields.addObject(column);
      for (var i = 0; i < 2; i++){
        Ember.set(this.model.get('exampleRows')[i], heading, [this.model.get('source_data_results')[i][column]]);
      }
    },
    removeField: function(heading){
      var column = this.model.get('oaFields')[heading].fields[0];
      this.model.get('oaFields')[heading].fields.removeObject(column);
      for (var i = 0; i < 2; i++){
        this.model.exampleRows[i][heading].removeObject(this.model.get('source_data_results')[i][column]);
      }
    },
  }
});