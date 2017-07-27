define('semantic-ui-ember/components/ui-dropdown', ['exports', 'ember', 'semantic-ui-ember/mixins/base', 'ember-promise-tools/mixins/promise-resolver'], function (exports, _ember, _semanticUiEmberMixinsBase, _emberPromiseToolsMixinsPromiseResolver) {
  'use strict';

  var _proxyCallback = function _proxyCallback(callbackName) {
    return function (value, text, $element) {
      return this.get('attrs.' + callbackName)(this._getObjectOrValue(value), text, $element, this);
    };
  };

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], _emberPromiseToolsMixinsPromiseResolver['default'], {
    module: 'dropdown',
    classNames: ['ui', 'dropdown'],
    ignorableAttrs: ['selected'],
    objectMap: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.set('objectMap', {});
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this.set('objectMap', null);
    },

    // Semantic Hooks
    willInitSemantic: function willInitSemantic(settings) {
      this._super.apply(this, arguments);
      if (settings.onChange) {
        settings.onChange = this.get('_onChange');
      }
      if (settings.onAdd) {
        settings.onAdd = this.get('_onAdd');
      }
      if (settings.onRemove) {
        settings.onRemove = this.get('_onRemove');
      }
    },

    didInitSemantic: function didInitSemantic() {
      this._super.apply(this, arguments);
      // We want to handle this outside of the standard process
      this.get('_settableAttrs').removeObject('selected');
      // We need to ensure the internal value is set to '',
      // otherwise when we get the value later it is undefined
      // and semantic returns the module instead of the actual value
      this.execute('clear');
      this._inspectSelected();
    },

    didUpdateAttrs: function didUpdateAttrs() {
      this._super.apply(this, arguments);
      this._inspectSelected();
    },

    actions: {
      mapping: function mapping(object) {
        var guid = _ember['default'].guidFor(object);
        if (!this._hasOwnProperty(this.get('objectMap'), guid)) {
          this.get('objectMap')[guid] = object;
        }
        _ember['default'].run.scheduleOnce('afterRender', this, this._inspectSelected);
        return guid;
      }
    },

    // Method proxies
    _onChange: function _onChange(value, text, $element) {
      // Semantic calls the events on any 'set {action}'
      // Because of that we want to ignore calls when we are
      // Specifically setting the value
      if (this.get('_isSettingSelect')) {
        return;
      }
      var returnValue = undefined;
      if (this.execute('is multiple')) {
        var values = this.execute('get values');
        returnValue = [];
        for (var i = 0; i < _ember['default'].get(values, 'length'); i++) {
          var item = this._atIndex(values, i);
          returnValue.push(this._getObjectOrValue(item));
        }
      } else {
        returnValue = this._getObjectOrValue(value);
      }

      return this.attrs.onChange(returnValue, text, $element, this);
    },
    _onAdd: _proxyCallback('onAdd'),
    _onRemove: _proxyCallback('onRemove'),

    // Private methods
    _atIndex: function _atIndex(collection, index) {
      if (typeof collection.objectAt === 'function') {
        return collection.objectAt(index);
      }
      return collection[index];
    },

    _getObjectOrValue: function _getObjectOrValue(value) {
      if (this._hasOwnProperty(this.get('objectMap'), value)) {
        return this.get('objectMap')[value];
      }
      if (_ember['default'].isEmpty(value)) {
        return null;
      }
      return value;
    },

    _inspectSelected: function _inspectSelected() {
      var selected = this.get('selected');
      return this.resolvePromise(selected, this._checkSelected);
    },

    _checkSelected: function _checkSelected(selectedValue) {
      var isMultiple = this.execute('is multiple');
      var moduleSelected = this._getCurrentSelected(isMultiple);

      if (!this._areSelectedEqual(selectedValue, moduleSelected, isMultiple)) {
        this.set('_isSettingSelect', true);
        this._setCurrentSelected(selectedValue, moduleSelected, isMultiple);
        this.set('_isSettingSelect', false);
      }
    },

    _getCurrentSelected: function _getCurrentSelected(isMultiple) {
      if (isMultiple) {
        var keys = this.execute('get values');
        var returnValues = [];
        for (var i = 0; i < keys.length; i++) {
          var _key = this._atIndex(keys, i);
          returnValues.push(this._getObjectOrValue(_key));
        }
        return returnValues;
      }

      var key = this.execute('get value');
      return this._getObjectOrValue(key);
    },

    _setCurrentSelected: function _setCurrentSelected(selectedValue, moduleSelected, isMultiple) {
      if (_ember['default'].isBlank(selectedValue)) {
        if (!_ember['default'].isBlank(moduleSelected)) {
          this.execute('clear');
        }
        return;
      }

      if (_ember['default'].isArray(selectedValue)) {
        var keys = [];
        if (!isMultiple) {
          _ember['default'].Logger.error("Selected is an array of values, but the dropdown doesn't have the class 'multiple'");
          return;
        }

        for (var i = 0; i < _ember['default'].get(selectedValue, 'length'); i++) {
          var item = this._atIndex(selectedValue, i);
          keys.push(this._getObjectKeyByValue(item));
        }

        return this.execute('set exactly', keys);
      }

      var key = this._getObjectKeyByValue(selectedValue);
      return this.execute('set selected', key);
    },

    _areSelectedEqual: function _areSelectedEqual(selectedValue, moduleValue, isMultiple) {
      if (isMultiple) {
        // If selectedValue passed in is an array, we are assuming that its the collection getting updated and that
        // all module values must equal the attrValues

        // If both are in a blank state of some kind, they are equal.
        // i.e. selected could be null and moduleValue could be an empty array
        if (_ember['default'].isBlank(selectedValue) && _ember['default'].isBlank(moduleValue)) {
          return true;
        }

        if (_ember['default'].isArray(selectedValue)) {
          if (_ember['default'].get(selectedValue, 'length') !== _ember['default'].get(moduleValue, 'length')) {
            return false;
          }

          // Loop through the collections and see if they are equal
          for (var i = 0; i < _ember['default'].get(selectedValue, 'length'); i++) {
            var value = this._atIndex(selectedValue, i);
            var equal = false;
            for (var j = 0; j < _ember['default'].get(moduleValue, 'length'); j++) {
              var _module = this._atIndex(moduleValue, j);
              if (this.areAttrValuesEqual('selected', value, _module)) {
                equal = true;
                break;
              }
            }
            if (!equal) {
              return false;
            }
          }
          // If we didn't return, the arrays are equal
          return true;
        }
        // otherwise, just try to see one of the values in the module equals the attr value
        // The use case is the selected value is a single value to start, then the module value is an array
        else if (_ember['default'].isArray(moduleValue)) {
            for (var i = 0; i < _ember['default'].get(moduleValue, 'length'); i++) {
              var item = this._atIndex(moduleValue, i);
              if (this.areAttrValuesEqual('selected', selectedValue, item)) {
                return true; // We found a match, just looking for one
              }
            }
            return false;
          }
      }
      return this.areAttrValuesEqual('selected', selectedValue, moduleValue);
    },

    _getObjectKeyByValue: function _getObjectKeyByValue(value) {
      // Since semantic is always binding to strings, we must return a string
      // Either through the object mapping or directly stringed value
      var objectMap = this.get('objectMap');
      for (var key in objectMap) {
        if (objectMap[key] === value) {
          return key;
        }
      }
      if (value == null) {
        return '';
      }
      return value.toString();
    }

  });
});