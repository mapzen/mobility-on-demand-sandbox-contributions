function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import InternalModelMap from './internal-model-map';

/**
 `IdentityMap` is a custom storage map for records by modelName
 used by `DS.Store`.

 @class IdentityMap
 @private
 */

var IdentityMap = function () {
  function IdentityMap() {
    _classCallCheck(this, IdentityMap);

    this._map = Object.create(null);
  }

  /**
   Retrieves the `InternalModelMap` for a given modelName,
   creating one if one did not already exist. This is
   similar to `getWithDefault` or `get` on a `MapWithDefault`
    @method retrieve
   @param modelName a previously normalized modelName
   @returns {InternalModelMap} the InternalModelMap for the given modelName
   */


  IdentityMap.prototype.retrieve = function retrieve(modelName) {
    var map = this._map[modelName];

    if (!map) {
      map = this._map[modelName] = new InternalModelMap(modelName);
    }

    return map;
  };

  /**
   Clears the contents of all known `RecordMaps`, but does
   not remove the InternalModelMap instances.
    @method clear
   */


  IdentityMap.prototype.clear = function clear() {
    var map = this._map;
    var keys = Object.keys(map);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      map[key].clear();
    }
  };

  return IdentityMap;
}();

export default IdentityMap;