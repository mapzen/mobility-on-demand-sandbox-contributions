import Ember from 'ember';
import sharedActions from '../mixins/shared-actions';

import MaintainerValidator from '../validator/maintainer';

export default Ember.Controller.extend(sharedActions, {
  MaintainerValidator,
  showErrorState: false,
  errorMessages: [],
  checkFormError: function (changeset) {
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
  resetErrorState: function () {
    Ember.set(this, 'showErrorState', false);
    Ember.set(this, 'errorMessages', []);
  },
  checkErrors: function (changeset) {
    // Check there is an e-mail value or not to show less generic error message
    if (changeset.get('maintainer_email')) {
      this.model.set('maintainer_name', changeset.get('maintainer_name'));
      this.model.set('maintainer_email',  changeset.get('maintainer_email'));
      return this.checkFormError(changeset);
    } else return new Promise((resolve) => resolve(['Provide an e-mail address to proceed']));
  },
  actions: {
    changeRoute: function(route, changeset){
      this.checkErrors(changeset)
        .then((errorMsgs) => {
          if (errorMsgs.length) {
            Ember.set(this, 'showErrorState', true);
            Ember.set(this, 'errorMessages', errorMsgs);
          } else {
            this.resetErrorState();
            this.transitionToRoute(route);
          }
        })
        .catch((err) => {
          const errorMsgs = [err]; // We can replace this error message to something vague
          Ember.set(this, 'showErrorState', true);
          Ember.set(this, 'errorMessages', errorMsgs);
        })
    },
    returnToReview: function(changeset){
      this.model.set('maintainer_name', changeset.get('maintainer_name'));
      this.model.set('maintainer_email', changeset.get('maintainer_email'));
      this.transitionToRoute("review");
    }
  }
});