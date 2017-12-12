import Ember from 'ember';
import sharedActions from '../mixins/shared-actions';

export default Ember.Controller.extend(sharedActions, {
  dataURL: null,
  dataFile: null,
  fileName: Ember.computed('dataFile', function(){
    if (this.get('dataFile')){
      return this.get('dataFile').name
    }
  }),
  actions: {
    setURL: function(input){
      this.set('dataFile', null);
      // example: http://gis.brevardcounty.us/gissrv/rest/services/Accela/AccelaGIS_Layers_WKID2881/MapServer/5
      var url = 'fields?source=' + input.currentTarget.value;
      this.set('dataURL', url);
    },
    uploadFile: function(){
      this.set('dataURL', null);
      var file = document.getElementById('uploadfile').files[0];
      this.set('dataFile', file);
    },
    changeRoute: function(route){
      // Create new record in store for this submission, with data link or data file.
      if (this.get('dataURL')){
        var url = this.get('dataURL');
        Ember.$.ajax({ url }).then((response) => this.store.createRecord('submission', {
            data_url: response.data,
            source_data_fields: response.source_data.fields,
            source_data_results: response.source_data.results,
            type: response.type
          })
        ).then(()=>this.transitionToRoute(route))
      } else if (this.get('dataFile')){
        this.store.createRecord('submission', {data_file: this.get('dataFile')});
        // this.transitionToRoute(route);
        
      } else {
        // set up form validation requiring either url or file
      }
    }
  }
});