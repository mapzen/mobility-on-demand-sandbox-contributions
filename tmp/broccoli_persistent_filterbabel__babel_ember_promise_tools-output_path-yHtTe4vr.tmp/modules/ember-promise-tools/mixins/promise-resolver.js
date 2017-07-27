import Ember from 'ember';
import isPromise from 'ember-promise-tools/utils/is-promise';
import isFulfilled from 'ember-promise-tools/utils/is-fulfilled';
import getPromiseContent from 'ember-promise-tools/utils/get-promise-content';

// Code referenced from https://github.com/fivetanley/ember-promise-helpers
export default Ember.Mixin.create({
  resolvePromise: function resolvePromise(maybePromise, immediateResolve, delayedResolve, catchResolve) {
    var _this = this;

    if (!isPromise(maybePromise)) {
      this.clearPromise();
      return immediateResolve.call(this, maybePromise);
    }
    // If we've already fulfilled, just return to avoid returning null
    // Probably could tie into SetValue, something to think about later
    if (isFulfilled(maybePromise)) {
      this.clearPromise();
      return immediateResolve.call(this, getPromiseContent(maybePromise));
    }

    // If the type wasn't a PromiseProxy or RSVP, check if we resolved for .then
    if (maybePromise === this._currentPromise) {
      if (this._promiseWasSettled) {
        return immediateResolve.call(this, this._promiseValue);
      }
      return null; // Return we don't need to check the latest again
    }

    this.ensureLatestPromise(maybePromise, function (promise) {
      promise.then(function (value) {
        if (maybePromise === _this._currentPromise) {
          _this._promiseWasSettled = true;
          _this._promiseValue = value;
          // This will recompue the value and fire the _wasSettled check above
          return (delayedResolve || immediateResolve).call(_this, value);
        }
      })['catch'](function (error) {
        if (catchResolve != null) {
          return catchResolve.call(_this, error);
        } else {
          Ember.Logger.error('Promise died in promise-resolver and no catchResolve method was passed in.');
          Ember.Logger.error(error);
        }
      });
    });
    return null;
  },

  ensureLatestPromise: function ensureLatestPromise(promise, callback) {
    this.clearPromise(promise);
    callback.call(this, Ember.RSVP.Promise.resolve(promise));
  },

  clearPromise: function clearPromise() {
    var promise = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    // It's a new promise, reset
    this._promiseWasSettled = false;
    this._currentPromise = promise;
  }
});