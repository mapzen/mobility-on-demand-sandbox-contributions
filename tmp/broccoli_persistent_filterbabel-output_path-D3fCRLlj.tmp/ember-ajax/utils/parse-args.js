define("ember-ajax/utils/parse-args", ["exports"], function (exports) {
  "use strict";

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  })();

  exports["default"] = parseArgs;

  function parseArgs() {
    var args = [].slice.apply(arguments);
    if (args.length === 1) {
      if (typeof args[0] === "string") {
        var _args = _slicedToArray(args, 1);

        var url = _args[0];

        return [url];
      } else {
        var _args2 = _slicedToArray(args, 1);

        var options = _args2[0];
        var url = options.url;

        delete options.url;
        var type = options.type || options.method;
        delete options.type;
        delete options.method;
        return [url, type, options];
      }
    }
    if (args.length === 2) {
      var _args3 = _slicedToArray(args, 1);

      var url = _args3[0];

      if (typeof args[1] === 'object') {
        var options = args[1];
        var type = options.type || options.method;
        delete options.type;
        delete options.method;
        return [url, type, options];
      } else {
        var type = args[1];
        return [url, type];
      }
    }
    return args;
  }
});