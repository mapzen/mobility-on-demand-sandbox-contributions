import Ember from 'ember';
import sharedActions from '../mixins/shared-actions';

import DataURLValidator from '../validator/data'

export default Ember.Controller.extend(sharedActions, {
  DataURLValidator,
  showErrorState: false,
  errorMessages: [],
  dataFile: null,
  fileName: Ember.computed('dataFile', function(){
    if (this.get('dataFile')){
      return this.get('dataFile').name
    }
  }),
  checkDataFile: function () {
    // If there is data file uploaded, that takes priority
    return (this.get('dataFile'));
  },
  checkDataUrlError: async function (changeset) {
    return new Promise((resolve, reject) =>
      changeset.validate().then(()=> {
        if (changeset.get('isValid')) resolve([]);
        else resolve(changeset.get('errors')
                    .reduce((errorMessages, error) => {
                      error.validation.map((validationMessage) => {
                        errorMessages.push(validationMessage)
                      })
                      return errorMessages;
                    }, []));
      })
      .catch((err) => {reject(err)})
    )
  },
  checkErrors: async function (changeset) {
    // When there is data file, it takes priority
    if (this.checkDataFile()) {
      this.model.set('data_file', this.get('dataFile'));
      return new Promise((resolve) => resolve([]));
    // If there is no data file but url, validate it
    } else if (changeset.get('data_url')) {
      this.model.set('data_url',  changeset.get('data_url'));
      return this.checkDataUrlError(changeset);
    // If there is nothing, throw an error
    } else return new Promise((resolve) => resolve(['You need a file or a url to proceed']));
  },
  resetErrorState: function () {
    Ember.set(this, 'showErrorState', false);
    Ember.set(this, 'errorMessages', []);
  },
  actions: {
    uploadFile: function(){
      this.set('dataURL', null);
      var file = document.getElementById('uploadfile').files[0];
      this.set('dataFile', file);
    },
    changeRoute: function(route, changeset){
      this.checkErrors(changeset)
        .then((errorMsgs) => {
          // When there is any error, show it and do not proceed
          if (errorMsgs.length) {
            Ember.set(this, 'showErrorState', true);
            Ember.set(this, 'errorMessages', errorMsgs);
          // When there is no error message, proceed
          } else {
            this.resetErrorState();
            this.transitionToRoute(route);
          }
        })
      .catch ((err) => {
        const errorMsgs = [err];
        Ember.set(this, 'showErrorState', true);
        Ember.set(this, 'errorMessages', errorMsgs);
      })
    }
  }
});
