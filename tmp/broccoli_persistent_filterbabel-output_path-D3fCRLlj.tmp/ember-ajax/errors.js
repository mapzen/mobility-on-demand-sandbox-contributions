define('ember-ajax/errors', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.AjaxError = AjaxError;
  exports.InvalidError = InvalidError;
  exports.UnauthorizedError = UnauthorizedError;
  exports.ForbiddenError = ForbiddenError;

  var EmberError = _ember['default'].Error;

  /**
    @class AjaxError
    @namespace DS
  */

  function AjaxError(errors) {
    var message = arguments.length <= 1 || arguments[1] === undefined ? 'Ajax operation failed' : arguments[1];

    EmberError.call(this, message);

    this.errors = errors || [{
      title: 'Ajax Error',
      detail: message
    }];
  }

  AjaxError.prototype = Object.create(EmberError.prototype);

  function InvalidError(errors) {
    AjaxError.call(this, errors, 'Request was rejected because it was invalid');
  }

  InvalidError.prototype = Object.create(AjaxError.prototype);

  function UnauthorizedError(errors) {
    AjaxError.call(this, errors, 'Ajax authorization failed');
  }

  UnauthorizedError.prototype = Object.create(AjaxError.prototype);

  function ForbiddenError(errors) {
    AjaxError.call(this, errors, 'Request was rejected because user is not permitted to perform this operation.');
  }

  ForbiddenError.prototype = Object.create(AjaxError.prototype);
});