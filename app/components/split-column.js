import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    extractionFunction: function(extraction_function, field){
      for (var i = 0; i < 2; i++){
        var fieldValue =  this.model.get('source_data_results')[i][this.model.get('oaFields')[field].fields[0]];
        var oa_extraction_regExp;
        if (extraction_function === "postfixed_street_pattern"){
          oa_extraction_regExp = new RegExp('^(?:\\s*(?:[0-9]+(?:[ -]/[0-9]/[0-9])?|[0-9]+-[0-9]+|[0-9]+-?[A-Z])\\s+)?(.*)', 'i');
        } else if (extraction_function === "prefixed_number_pattern"){
          oa_extraction_regExp = new RegExp('^\\s*(\\d+(?:[ -]\\d/\\d)?|\\d+-\\d+|\\d+-?[A-Z])\\s+', 'i');
        } else if (extraction_function === "postfixed_street_with_units_pattern"){
          oa_extraction_regExp = new RegExp('\\s((?:(?:UNIT|APARTMENT|APT\\.?|SUITE|STE\\.?|BUILDING|BLDG\\.?|LOT)\\s+|#).+)$', 'i');
        } else if (extraction_function === "postfixed_unit_pattern"){
          oa_extraction_regExp = new RegExp('^(?:\\s*(?:\\d+(?:[ -]\\d/\\d)?|\\d+-\\d+|\\d+-?[A-Z])\\s+)?(.+?)(?:\\s+(?:(?:UNIT|APARTMENT|APT\\.?|SUITE|STE\\.?|BUILDING|BLDG\\.?|LOT)\\s+|#).+)?$', 'i');
        }
        var valueAfterFunction = oa_extraction_regExp.exec(fieldValue);
        if (valueAfterFunction !== null){
          this.model.get('exampleRows')[i][field].replace(0, 1, valueAfterFunction[1]);
        }
      }
      Ember.set(this.model.get('oaFields')[field], "function", extraction_function);
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
    addFunction: function(field, action){
      Ember.set(this.model.get('oaFields')[field], "function", action);
      if (action === "join"){
        this.set('showAdditionalJoinDropdown', true);
      }
    },
    setMayContainUnits: function(){
      if (this.model.get('oaFields').street.may_contain_units === false){
        Ember.set(this.model.get('oaFields').street, "may_contain_units", true);
      } else {
        Ember.set(this.model.get('oaFields').street, "may_contain_units", false);
      }
    },
  }
});
