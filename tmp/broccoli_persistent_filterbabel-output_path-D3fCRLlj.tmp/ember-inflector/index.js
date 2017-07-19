define("ember-inflector/index", ["exports", "ember", "ember-inflector/lib/system", "ember-inflector/lib/ext/string"], function (exports, _ember, _emberInflectorLibSystem, _emberInflectorLibExtString) {
  /* global define, module */

  "use strict";

  _emberInflectorLibSystem.Inflector.defaultRules = _emberInflectorLibSystem.defaultRules;
  _ember["default"].Inflector = _emberInflectorLibSystem.Inflector;

  _ember["default"].String.pluralize = _emberInflectorLibSystem.pluralize;
  _ember["default"].String.singularize = _emberInflectorLibSystem.singularize;

  exports["default"] = _emberInflectorLibSystem.Inflector;
  exports.pluralize = _emberInflectorLibSystem.pluralize;
  exports.singularize = _emberInflectorLibSystem.singularize;
  exports.defaultRules = _emberInflectorLibSystem.defaultRules;

  if (typeof define !== 'undefined' && define.amd) {
    define('ember-inflector', ['exports'], function (__exports__) {
      __exports__['default'] = _emberInflectorLibSystem.Inflector;
      __exports__.pluralize = _emberInflectorLibSystem.pluralize;
      __exports__.singularize = _emberInflectorLibSystem.singularize;

      return __exports__;
    });
  } else if (typeof module !== 'undefined' && module['exports']) {
    module['exports'] = _emberInflectorLibSystem.Inflector;
    _emberInflectorLibSystem.Inflector.singularize = _emberInflectorLibSystem.singularize;
    _emberInflectorLibSystem.Inflector.pluralize = _emberInflectorLibSystem.pluralize;
  }
});