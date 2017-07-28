define('ember-ajax/request', ['exports', 'ember-ajax/raw', 'ember'], function (exports, _emberAjaxRaw, _ember) {
  'use strict';

  exports['default'] = request;

  var deprecate = _ember['default'].deprecate;

  /*
   * jQuery.ajax wrapper, supports the same signature except providing
   * `success` and `error` handlers will throw an error (use promises instead)
   * and it resolves only the response (no access to jqXHR or textStatus).
   */
  function request() {
    deprecate('ember-ajax/request is deprecated and will be removed in ember-ajax@2.0.0', false, { id: 'ember-ajax.raw' });
    return _emberAjaxRaw['default'].apply(undefined, arguments).then(function (result) {
      return result.response;
    }, null, 'ember-ajax: unwrap raw ajax response');
  }
});