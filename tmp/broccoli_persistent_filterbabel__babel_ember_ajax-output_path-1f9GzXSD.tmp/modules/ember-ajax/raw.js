var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

export default raw;
import makePromise from './make-promise';
import parseArgs from './utils/parse-args';

import Ember from 'ember';
var deprecate = Ember.deprecate;

/*
 * Same as `request` except it resolves an object with `{response, textStatus,
 * jqXHR}`, useful if you need access to the jqXHR object for headers, etc.
 */
function raw() {
  deprecate('ember-ajax/raw is deprecated and will be removed in ember-ajax@2.0.0', false, { id: 'ember-ajax.raw' });

  var _parseArgs$apply = parseArgs.apply(null, arguments);

  var _parseArgs$apply2 = _slicedToArray(_parseArgs$apply, 3);

  var url = _parseArgs$apply2[0];
  var type = _parseArgs$apply2[1];
  var settings = _parseArgs$apply2[2];

  if (!settings) {
    settings = {};
  }
  settings.url = url;
  settings.type = type;
  return makePromise(settings);
}