define('ember-bootstrap/components/base/bs-popover/element', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-popover/element'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsPopoverElement) {
  'use strict';

  var computed = _ember['default'].computed;

  /**
   Internal component for popover's markup. Should not be used directly.
  
   @class PopoverElement
   @namespace Components
   @extends Ember.Component
   @private
   */

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsPopoverElement['default'],

    classNames: ['popover'],
    classNameBindings: ['fade'],
    ariaRole: 'tooltip',

    /**
     * @property placement
     * @type string
     * @default 'top'
     * @public
     */
    placement: 'top',

    /**
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * @property showHelp
     * @type boolean
     * @default false
     * @public
     */
    showHelp: false,

    /**
     * @property title
     * @type string
     * @public
     */
    title: undefined,

    /**
     * @property hasTitle
     * @type boolean
     * @private
     */
    hasTitle: computed.notEmpty('title')
  });
});