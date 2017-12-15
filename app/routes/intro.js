import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var submission = this.store.createRecord('submission',{
      share_alike: false,
      oaFields:{
        lon:{
          fields: [],
          function: null,
          separator: " "
        },
        lat:{
          fields: [],
          function: null,
          separator: " ",
        },
        number:{
          fields: [],
          function: null,
          separator: " "
        },
        street:{
          fields: [],
          function: null,
          separator: " ",
          may_contain_units: false
        },
        unit:{
          fields: [],
          function: null,
          separator: " "
        },
        city:{
          fields: [],
          function: null,
          separator: " "
        },
        district:{
          fields: [],
          function: null,
          separator: " "
        },
        region:{
          fields: [],
          function: null,
          separator: " "
        },
        postcode:{
          fields: [],
          function: null,
          separator: " "
        }
      },
      exampleRows:[{
        lon: null,
        lat: null,
        number: null,
        street: null,
        unit: null,
        city: null,
        district: null,
        region: null,
        postcode: null
      },
      {
        lon: null,
        lat: null,
        number: null,
        street: null,
        unit: null,
        city: null,
        district: null,
        region: null,
        postcode: null
      }],
    });
    return submission;
  }
});