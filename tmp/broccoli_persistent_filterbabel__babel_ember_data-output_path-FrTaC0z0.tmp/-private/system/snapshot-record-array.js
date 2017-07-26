var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  @module ember-data
*/

/**
  @class SnapshotRecordArray
  @namespace DS
  @private
  @constructor
  @param {Array} snapshots An array of snapshots
  @param {Object} meta
*/
var SnapshotRecordArray = function () {
  function SnapshotRecordArray(recordArray, meta) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, SnapshotRecordArray);

    /**
      An array of snapshots
      @private
      @property _snapshots
      @type {Array}
    */
    this._snapshots = null;

    /**
      An array of records
      @private
      @property _recordArray
      @type {Array}
    */
    this._recordArray = recordArray;

    /**
      Number of records in the array
       Example
       ```app/adapters/post.js
      import DS from 'ember-data'
       export default DS.JSONAPIAdapter.extend({
        shouldReloadAll(store, snapshotRecordArray) {
          return !snapshotRecordArray.length;
        },
      });
      ```
       @property length
      @type {Number}
    */
    this.length = recordArray.get('length');

    this._type = null;

    /**
      Meta objects for the record array.
       Example
       ```app/adapters/post.js
      import DS from 'ember-data'
       export default DS.JSONAPIAdapter.extend({
        shouldReloadAll(store, snapshotRecordArray) {
          var lastRequestTime = snapshotRecordArray.meta.lastRequestTime;
          var twentyMinutes = 20 * 60 * 1000;
          return Date.now() > lastRequestTime + twentyMinutes;
        },
      });
      ```
       @property meta
      @type {Object}
    */
    this.meta = meta;

    /**
      A hash of adapter options passed into the store method for this request.
       Example
       ```app/adapters/post.js
      import MyCustomAdapter from './custom-adapter';
       export default MyCustomAdapter.extend({
        findAll(store, type, sinceToken, snapshotRecordArray) {
          if (snapshotRecordArray.adapterOptions.subscribe) {
            // ...
          }
          // ...
        }
      });
      ```
       @property adapterOptions
      @type {Object}
    */
    this.adapterOptions = options.adapterOptions;

    /**
      The relationships to include for this request.
       Example
       ```app/adapters/application.js
      import DS from 'ember-data';
       export default DS.Adapter.extend({
        findAll(store, type, snapshotRecordArray) {
          var url = `/${type.modelName}?include=${encodeURIComponent(snapshotRecordArray.include)}`;
           return fetch(url).then((response) => response.json())
        }
      });
       @property include
      @type {String|Array}
    */
    this.include = options.include;
  }

  /**
    The type of the underlying records for the snapshots in the array, as a DS.Model
    @property type
    @type {DS.Model}
  */


  /**
    Get snapshots of the underlying record array
     Example
     ```app/adapters/post.js
    import DS from 'ember-data'
     export default DS.JSONAPIAdapter.extend({
      shouldReloadAll(store, snapshotArray) {
        var snapshots = snapshotArray.snapshots();
         return snapshots.any(function(ticketSnapshot) {
          var timeDiff = moment().diff(ticketSnapshot.attr('lastAccessedAt'), 'minutes');
          if (timeDiff > 20) {
            return true;
          } else {
            return false;
          }
        });
      }
    });
    ```
     @method snapshots
    @return {Array} Array of snapshots
  */
  SnapshotRecordArray.prototype.snapshots = function snapshots() {
    if (this._snapshots !== null) {
      return this._snapshots;
    }

    this._snapshots = this._recordArray._takeSnapshot();

    return this._snapshots;
  };

  _createClass(SnapshotRecordArray, [{
    key: 'type',
    get: function get() {
      return this._type || (this._type = this._recordArray.get('type'));
    }
  }]);

  return SnapshotRecordArray;
}();

export default SnapshotRecordArray;