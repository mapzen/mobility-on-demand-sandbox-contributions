

export default makePromise;

import Ember from 'ember';

var run = Ember.run;
var RSVP = Ember.RSVP;

function makePromise(settings) {
  var type = settings.type || 'GET';
  return new RSVP.Promise(function (resolve, reject) {
    settings.success = makeSuccess(resolve);
    settings.error = makeError(reject);
    Ember.$.ajax(settings);
  }, 'ember-ajax: ' + type + ' to ' + settings.url);
}

function makeSuccess(resolve) {
  return function success(response, textStatus, jqXHR) {
    run(null, resolve, {
      response: response,
      textStatus: textStatus,
      jqXHR: jqXHR
    });
  };
}

function makeError(reject) {
  return function error(jqXHR, textStatus, errorThrown) {
    run(null, reject, {
      jqXHR: jqXHR,
      textStatus: textStatus,
      errorThrown: errorThrown
    });
  };
}