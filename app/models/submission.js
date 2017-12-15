import DS from 'ember-data';

export default DS.Model.extend({
  data_url: DS.attr('string'),
  data_file: DS.attr(),
  source: DS.attr('string'),
  update_frequency: DS.attr(),
  license_exists: DS.attr(),
  license: DS.attr('string'),
  license_url: DS.attr('string'),
  user_submitted_url: DS.attr('string'),
  share_alike: DS.attr('boolean'),
  attribution: DS.attr(),
  attribution_text: DS.attr('string'),
  maintainer_name: DS.attr('string'),
  maintainer_email: DS.attr('string'),
  oaFields: DS.attr(),
  exampleRows:DS.attr()
});
