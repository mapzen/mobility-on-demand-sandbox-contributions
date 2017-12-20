import Ember from 'ember';

export default Ember.Component.extend({
  field: null,
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
  user_data: Ember.computed('model.webServiceResponse', function(){
    return this.model.webServiceResponse.source_data.results;
  }),
  extractionFunction: Ember.computed('properties.fields.[]', function(){
    var extractionFunction = this.model.submission.oaFields[this.get('field')].function;
    if (extractionFunction === "removePrefixOrPostfix"){
      return "row_fxn_remove_prefix";
    } else {
      return extractionFunction;
    }
  }),
  actions: {
    editField: function(heading, index, column){
      this.model.submission.get('oaFields')[heading].fields.replace(index, 1, column);
      for (var i = 0; i < 2; i++){
        this.model.submission.exampleRows[i][heading].replace(index, 1, this.model.webServiceResponse.source_data.results[i][column])
      }
    },
    setMayContainUnits: function(){
      if (this.model.submission.get('oaFields').street.may_contain_units === false){
        Ember.set(this.model.submission.get('oaFields').street, "may_contain_units", true);
      } else {
        Ember.set(this.model.submission.get('oaFields').street, "may_contain_units", false);
      }
    },
    removeFunction: function(field){
      Ember.set(this.model.submission.get('oaFields')[field], "function", "split");
      for (var i = 0; i < 2; i++){
        var originalColumn = this.model.submission.get('oaFields')[field].fields[0]
        Ember.set(this.model.submission.get('exampleRows')[i], field, [this.model.webServiceResponse.source_data.results[i][originalColumn]]);
      }
    },
    setPrefixPostfixFieldFromDropdown: function(heading, column){
      var prefixOrPostfix = null;
      if (this.model.submission.oaFields[heading].function === "removePrefixOrPostfix"){
        prefixOrPostfix = "row_fxn_remove_prefix";
      } else {
        prefixOrPostfix = this.model.submission.oaFields[heading].function;
      }

      Ember.set(this.model.submission.get('oaFields')[heading], "prefix_or_postfix", column);
      var field_to_remove = this.model.submission.oaFields[heading].prefix_or_postfix.toString();

      for (var i = 0; i < 2; i++){
        var fieldValue =  this.model.webServiceResponse.source_data.results[i][this.model.submission.oaFields[heading].fields[0]].toString();
        var fieldValueToRemove = this.model.webServiceResponse.source_data.results[i][field_to_remove].toString();
        var valueAfterFunction;
        if (prefixOrPostfix === "row_fxn_remove_prefix"){
          if (field_to_remove !== "" && fieldValue.startsWith(fieldValueToRemove)){
            valueAfterFunction = fieldValue.slice(fieldValueToRemove.length, fieldValue.length).trim();
            this.model.submission.get('exampleRows')[i][heading].replace(0, 1, valueAfterFunction);
          } else {
            this.model.submission.get('exampleRows')[i][heading].replace(0, 1, fieldValue);
          }
        } else {
          if (field_to_remove !== "" && fieldValue.endsWith(fieldValueToRemove)){
            valueAfterFunction = fieldValue.slice(0, (fieldValue.length - fieldValueToRemove.length)).trim();
            this.model.submission.get('exampleRows')[i][heading].replace(0, 1, valueAfterFunction);
          } else {
            this.model.submission.get('exampleRows')[i][heading].replace(0, 1, fieldValue);
          }
        }
      }
    },
    setPrefixPostfixFieldFromRadio: function(heading, input){
      Ember.set(this.model.submission.get('oaFields')[heading], "function", input);
      var field_to_remove = this.model.submission.oaFields[heading].prefix_or_postfix.toString();

      for (var i = 0; i < 2; i++){
        var fieldValue =  this.model.webServiceResponse.source_data.results[i][this.model.submission.oaFields[heading].fields[0]].toString();
        var fieldValueToRemove = this.model.webServiceResponse.source_data.results[i][field_to_remove].toString();
        var valueAfterFunction;
        if (input === "row_fxn_remove_prefix"){
          if (field_to_remove !== "" && fieldValue.startsWith(fieldValueToRemove)){
            valueAfterFunction = fieldValue.slice(fieldValueToRemove.length, fieldValue.length).trim();
            this.model.submission.get('exampleRows')[i][heading].replace(0, 1, valueAfterFunction);
          } else {
            this.model.submission.get('exampleRows')[i][heading].replace(0, 1, fieldValue);
          }
        } else {
          if (field_to_remove !== "" && fieldValue.endsWith(fieldValueToRemove)){
            valueAfterFunction = fieldValue.slice(0, (fieldValue.length - fieldValueToRemove.length)).trim();
            this.model.submission.get('exampleRows')[i][heading].replace(0, 1, valueAfterFunction);
          } else {
            this.model.submission.get('exampleRows')[i][heading].replace(0, 1, fieldValue);
          }
        }
      }
    }
  }
});
