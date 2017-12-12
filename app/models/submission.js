import DS from 'ember-data';

export default DS.Model.extend({
  data_url: DS.attr('string'),
  data_file: DS.attr(),
  type: DS.attr('string'),
  source: DS.attr('string'),
  update_frequency: DS.attr(),
  edit_mode: false,
  license_exists: DS.attr(),
  license: DS.attr('string'),
  license_url: DS.attr('string'),
  user_submitted_url: DS.attr('string'),
  share_alike: false,
  attribution: DS.attr(),
  attribution_text: DS.attr('string'),
  maintainer_name: DS.attr('string'),
  maintainer_email: DS.attr('string'),
  source_data_fields: DS.attr(),
  source_data_results: DS.attr(),
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
  }]
});
