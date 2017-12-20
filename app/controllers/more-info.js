import Ember from 'ember';

export default Ember.Controller.extend({
  licenses: [{
    name: "Open Data Commons Attribution License (ODC-By)",
    url: "http://opendatacommons.org/licenses/by/1.0/"
  },{
    name: "Open Data Commons Open Database License (ODbL)",
    url: "http://opendatacommons.org/licenses/odbl/1.0/"
  },{
    name: "Creative Commons Attribution (CC BY)",
    url: "https://creativecommons.org/licenses/by/4.0/"
  },{
    name: "Creative Commons Attribution-ShareAlike (CC BY-SA)",
    url: "https://creativecommons.org/licenses/by-sa/4.0/"
  },{
    name: "GNU Free Documentation License",
    url: "http://www.gnu.org/licenses/fdl-1.3.en.html"
  }],
  frequencies: ["daily", "weekly", "monthly", "quarterly", "annually", "Unknown"],
  actions: {
    licenseExists: function(input){
      this.model.set('license_exists', input)
      this.model.set('license', null);
      this.model.set('license_url', null);
      this.model.set('user_submitted_url', null);
      this.model.set('attribution', null);
      this.model.set('attribution_text', null);
    },
    selectLicense: function(license){
      this.model.set('license', null)
      this.model.set('user_submitted_url', null)
      this.model.set('license', license.name)
      this.model.set('license_url', license.url)
      $('.choose.checkbox').checkbox('attach events', '.license.selection', 'check');
      $('.provide.checkbox').checkbox('attach events', '.license.selection', 'uncheck');
    },
    changeRoute: function(route){
      this.transitionToRoute(route);
    },
    userSubmittedLicense: function(input){
      this.model.set('license', null)
      this.model.set('license_url', null)
      this.model.set('user_submitted_url', input.target.value)
      console.log(input)
      $('.provide.checkbox').checkbox('attach events', 'input.user-submitted', 'check');
      $('.choose.checkbox').checkbox('attach events', 'input.user-submitted', 'uncheck');
    },
    setShareAlike: function(input){
      if (input === true){
        this.model.set('share_alike', true);
      } else {
        this.model.set('share_alike', null);
      }
    },
    setAttribution: function(input){
      this.model.set('attribution', input);
      if (input === false || input === "unknown"){
        this.model.set('attribution_text', null);
      }
    },
    setAttributionText: function(text){
      this.model.set('attribution_text', text.target.value);
    },
    setFrequency: function(frequency){
      this.model.set('update_frequency', frequency);
    }
  }
});
