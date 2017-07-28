define('semantic-ui-ember/mixins/base', ['exports', 'ember', 'semantic-ui-ember/semantic', 'ember-string-ishtmlsafe-polyfill'], function (exports, _ember, _semanticUiEmberSemantic, _emberStringIshtmlsafePolyfill) {
  'use strict';

  var EMBER_ATTRS = ['class', 'classNameBindings', 'classNames', 'tagName'];
  var HTML_ATTRS = ['id', 'name', 'readonly', 'autofocus', 'tabindex', 'title'];
  var CUSTOM_ATTRS = ['onElement'];

  _semanticUiEmberSemantic['default'].BaseMixin = _ember['default'].Mixin.create({
    /// Internal Variables
    _initialized: false,
    _bindableAttrs: null,
    _settableAttrs: null,
    _ignorableAttrs: null,

    attributeBindings: ['autofocus', 'tabindex', 'title'],

    /// EMBER HOOKS
    init: function init() {
      this._super.apply(this, arguments);

      if (_ember['default'].isBlank(this.getSemanticModuleName())) {
        return _ember['default'].Logger.error('A module was not declared on semantic extended type');
      }
      this.set('_initialized', false);
      this.set('_bindableAttrs', _ember['default'].A());
      this.set('_settableAttrs', _ember['default'].A());
      this.set('_ignorableAttrs', this.getSemanticIgnorableAttrs());
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.initSemanticModule();

      // Get the modules settable and gettable properties.
      var settableProperties = _ember['default'].A(Object.keys(this.execute('internal', 'set')));
      var gettableProperties = _ember['default'].A(Object.keys(this.execute('internal', 'get')));

      for (var key in this.get('attrs')) {
        // If it has a settable and gettable attribute, then its bindable
        if (settableProperties.includes(key) && gettableProperties.includes(key)) {
          this.get('_bindableAttrs').addObject(key);
        } else if (settableProperties.includes(key)) {
          // otherwise, its settable only
          this.get('_settableAttrs').addObject(key);
        }
      }
      this.didInitSemantic();
      this.set('_initialized', true);
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this.execute('destroy');
    },

    didUpdateAttrs: function didUpdateAttrs() {
      this._super.apply(this, arguments);
      for (var i = 0; i < this.get('_bindableAttrs').length; i++) {
        var bindableAttr = this.get('_bindableAttrs')[i];
        var attrValue = this._getAttrValue(bindableAttr);
        var moduleValue = this.getSemanticAttr(bindableAttr);
        if (!this.areAttrValuesEqual(bindableAttr, attrValue, moduleValue)) {
          this.setSemanticAttr(bindableAttr, attrValue);
        }
      }
      for (var i = 0; i < this.get('_settableAttrs').length; i++) {
        var settableAttr = this.get('_settableAttrs')[i];
        var attrValue = this._getAttrValue(settableAttr);
        this.setSemanticAttr(settableAttr, attrValue);
      }
    },

    /// Semantic Hooks
    getSemanticIgnorableAttrs: function getSemanticIgnorableAttrs() {
      var ignorableAttrs = [];
      if (_ember['default'].isPresent(this.get('ignorableAttrs'))) {
        ignorableAttrs = ignorableAttrs.concat(this.get('ignorableAttrs'));
      }
      ignorableAttrs = ignorableAttrs.concat(EMBER_ATTRS);
      ignorableAttrs = ignorableAttrs.concat(HTML_ATTRS);
      ignorableAttrs = ignorableAttrs.concat(CUSTOM_ATTRS);
      return _ember['default'].A(ignorableAttrs);
    },

    getSemanticScope: function getSemanticScope() {
      if (_ember['default'].isPresent(this.get('onElement'))) {
        return this.$(this.get('onElement'));
      }
      return this.$();
    },

    getSemanticModuleName: function getSemanticModuleName() {
      return this.get('module');
    },

    getSemanticModule: function getSemanticModule() {
      var selector = this.getSemanticScope();
      if (selector != null) {
        var _module = selector[this.getSemanticModuleName()];
        if (typeof _module === 'function') {
          return _module;
        }
      }
      return null;
    },

    getSemanticModuleGlobal: function getSemanticModuleGlobal() {
      var moduleName = this.getSemanticModuleName();
      return window.$.fn[moduleName];
    },

    willInitSemantic: function willInitSemantic(settings) {// jshint ignore:line
      // Use this method to modify the settings object on inherited components, before module initialization
    },

    initSemanticModule: function initSemanticModule() {
      var module = this.getSemanticModule();
      if (module) {
        module.call(this.getSemanticScope(), this._settings());
      } else {
        _ember['default'].Logger.error('The Semantic UI module ' + this.getSemanticModuleName() + ' was not found and did not initialize');
      }
    },

    didInitSemantic: function didInitSemantic() {
      // Use this method after the module is initialized to do post initialized changes
    },

    getSemanticAttr: function getSemanticAttr(attrName) {
      return this.execute('get ' + attrName);
    },

    setSemanticAttr: function setSemanticAttr(attrName, attrValue) {
      return this.execute('set ' + attrName, this._unwrapHTMLSafe(attrValue));
    },

    areAttrValuesEqual: function areAttrValuesEqual(attrName, attrValue, moduleValue) {
      return attrValue === moduleValue || this._stringCompareIfPossible(attrValue) === this._stringCompareIfPossible(moduleValue) || _ember['default'].isEqual(attrValue, moduleValue);
    },

    // Semantic Helper Methods
    execute: function execute() {
      var module = this.getSemanticModule();
      if (module) {
        return module.apply(this.getSemanticScope(), arguments);
      }
      _ember['default'].Logger.warn("The execute method was called, but the Semantic-UI module didn't exist.");
    },

    actions: {
      execute: function execute() {
        return this.execute.apply(this, arguments);
      }
    },

    // Private Methods
    _getAttrValue: function _getAttrValue(name) {
      var value = this.get('attrs.' + name);

      if (_ember['default'].isBlank(value)) {
        return value;
      }

      // if its a mutable object, get the actual value
      if (typeof value === 'object') {
        var objectKeys = _ember['default'].A(Object.keys(value));
        if (objectKeys.any(function (objectkey) {
          return objectkey.indexOf('MUTABLE_CELL') >= 0;
        })) {
          value = _ember['default'].get(value, 'value');
        }
      }

      return value;
    },

    _settings: function _settings() {
      var moduleName = this.getSemanticModuleName();

      var moduleGlobal = this.getSemanticModuleGlobal();
      if (!moduleGlobal) {
        _ember['default'].Logger.error('Unable to find jQuery Semantic UI module: ' + moduleName);
        return;
      }

      var custom = {
        debug: _semanticUiEmberSemantic['default'].UI_DEBUG,
        performance: _semanticUiEmberSemantic['default'].UI_PERFORMANCE,
        verbose: _semanticUiEmberSemantic['default'].UI_VERBOSE
      };

      for (var key in this.get('attrs')) {
        var value = this._getAttrValue(key);

        if (!this._hasOwnProperty(moduleGlobal.settings, key)) {
          if (!this.get('_ignorableAttrs').includes(key) && !this.get('_ignorableAttrs').includes(_ember['default'].String.camelize(key))) {
            // TODO: Add better ember keys here
            // Ember.Logger.debug(`You passed in the property '${key}', but a setting doesn't exist on the Semantic UI module: ${moduleName}`);
          }
          continue;
        }

        if (value != null) {
          custom[key] = value;
        }
      }

      // Init, and allow any overrides
      this.willInitSemantic(custom);

      // Late bind any functions over to use the right scope
      for (var key in custom) {
        var value = custom[key];
        if (typeof value === 'function') {
          custom[key] = _ember['default'].run.bind(this, this._updateFunctionWithParameters(key, value));
        }
        if (typeof value === 'object') {
          if ((0, _emberStringIshtmlsafePolyfill['default'])(value)) {
            custom[key] = this._unwrapHTMLSafe(value);
          }
        }
      }

      return custom;
    },

    _updateFunctionWithParameters: function _updateFunctionWithParameters(key, fn) {
      return function () {
        var args = [].splice.call(arguments, 0);
        // always add component instance as the last parameter incase they need access to it
        args.push(this);

        if (this.get('_initialized')) {
          return fn.apply(this, args);
        }
      };
    },

    _stringCompareIfPossible: function _stringCompareIfPossible(value) {
      // If its undefined or null, compare on null
      if (value == null) {
        return null;
      }
      // We should only compare string values on primitive types
      switch (typeof value) {
        case "string":
          return value;
        case "boolean":
        case "number":
          return value.toString();
        case "object":
          return this._unwrapHTMLSafe(value);
        default:
          // Don't convert to string, otherwise it would be "[Object]"
          return value;
      }
    },

    _setAttrBindable: function _setAttrBindable(attrName) {
      if (this.get('_settableAttrs').includes(attrName)) {
        this.get('_settableAttrs').removeObject(attrName);
        this.get('_bindableAttrs').addObject(attrName);
      }
    },

    _unwrapHTMLSafe: function _unwrapHTMLSafe(value) {
      if ((0, _emberStringIshtmlsafePolyfill['default'])(value)) {
        return value.toString();
      }
      return value;
    },

    _hasOwnProperty: function _hasOwnProperty(object, property) {
      if (object) {
        if (object.hasOwnProperty && typeof object.hasOwnProperty === "function") {
          return object.hasOwnProperty(property);
        }
        // Ember 2.9 returns an EmptyObject, which doesn't have hasOwnProperty
        return Object.prototype.hasOwnProperty.call(object, property);
      }

      return false;
    }
  });

  exports['default'] = _semanticUiEmberSemantic['default'].BaseMixin;
});