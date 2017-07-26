define('ember-bootstrap/mixins/sub-component', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * @class SubComponent
   * @namespace Mixins
   * @deprecated
   * @private
   */
  exports['default'] = _ember['default'].Mixin.create({
    targetObject: _ember['default'].computed.alias('parentView')
  });
});