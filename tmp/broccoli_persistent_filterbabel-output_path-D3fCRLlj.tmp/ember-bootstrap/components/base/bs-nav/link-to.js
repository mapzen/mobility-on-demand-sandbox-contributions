define('ember-bootstrap/components/base/bs-nav/link-to', ['exports', 'ember', 'ember-bootstrap/mixins/component-child'], function (exports, _ember, _emberBootstrapMixinsComponentChild) {
  'use strict';

  /**
  
   Extended `{{link-to}}` component for use within Navs.
  
   @class NavLinkTo
   @namespace Components
   @extends Ember.LinkComponent
   @uses Mixins.ComponentChild
   @public
   */
  exports['default'] = _ember['default'].LinkComponent.extend(_emberBootstrapMixinsComponentChild['default'], {});
});