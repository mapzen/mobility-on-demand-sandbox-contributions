import Ember from 'ember';
import layout from '../templates/components/ember-wormhole';
import { getActiveElement, findElementById, getDOM } from '../utils/dom';

var Component = Ember.Component,
    computed = Ember.computed,
    observer = Ember.observer,
    run = Ember.run;


export default Component.extend({
  layout: layout,

  /*
   * Attrs
   */
  to: computed.alias('destinationElementId'),
  destinationElementId: null,
  destinationElement: computed('destinationElementId', 'renderInPlace', function () {
    var renderInPlace = this.get('renderInPlace');
    if (renderInPlace) {
      return this._element;
    }
    var id = this.get('destinationElementId');
    if (!id) {
      return null;
    }
    return findElementById(this._dom, id);
  }),
  renderInPlace: false,

  /*
   * Lifecycle
   */
  init: function init() {
    this._super.apply(this, arguments);

    this._dom = getDOM(this);

    // Create text nodes used for the head, tail
    this._wormholeHeadNode = this._dom.createTextNode('');
    this._wormholeTailNode = this._dom.createTextNode('');

    // A prop to help in the mocking of didInsertElement timing for Fastboot
    this._didInsert = false;
  },


  /*
   * didInsertElement does not fire in Fastboot. Here we use willRender and
   * a _didInsert property to approximate the timing. Importantly we want
   * to run appendToDestination after the child nodes have rendered.
   */
  willRender: function willRender() {
    var _this = this;

    this._super.apply(this, arguments);
    if (!this._didInsert) {
      this._didInsert = true;
      run.schedule('afterRender', function () {
        if (_this.isDestroyed) {
          return;
        }
        _this._element = _this._wormholeHeadNode.parentNode;
        if (!_this._element) {
          throw new Error('The head node of a wormhole must be attached to the DOM');
        }
        _this._appendToDestination();
      });
    }
  },


  willDestroyElement: function willDestroyElement() {
    var _this2 = this;

    // not called in fastboot
    this._super.apply(this, arguments);
    this._didInsert = false;
    var _wormholeHeadNode = this._wormholeHeadNode,
        _wormholeTailNode = this._wormholeTailNode;

    run.schedule('render', function () {
      _this2._removeRange(_wormholeHeadNode, _wormholeTailNode);
    });
  },

  _destinationDidChange: observer('destinationElement', function () {
    var destinationElement = this.get('destinationElement');
    if (destinationElement !== this._wormholeHeadNode.parentNode) {
      run.schedule('render', this, '_appendToDestination');
    }
  }),

  _appendToDestination: function _appendToDestination() {
    var destinationElement = this.get('destinationElement');
    if (!destinationElement) {
      var destinationElementId = this.get('destinationElementId');
      if (destinationElementId) {
        throw new Error('ember-wormhole failed to render into \'#' + destinationElementId + '\' because the element is not in the DOM');
      }
      throw new Error('ember-wormhole failed to render content because the destinationElementId was set to an undefined or falsy value.');
    }

    var startingActiveElement = getActiveElement();
    this._appendRange(destinationElement, this._wormholeHeadNode, this._wormholeTailNode);
    var resultingActiveElement = getActiveElement();
    if (startingActiveElement && resultingActiveElement !== startingActiveElement) {
      startingActiveElement.focus();
    }
  },
  _appendRange: function _appendRange(destinationElement, firstNode, lastNode) {
    while (firstNode) {
      destinationElement.insertBefore(firstNode, null);
      firstNode = firstNode !== lastNode ? lastNode.parentNode.firstChild : null;
    }
  },
  _removeRange: function _removeRange(firstNode, lastNode) {
    var node = lastNode;
    do {
      var next = node.previousSibling;
      if (node.parentNode) {
        node.parentNode.removeChild(node);
        if (node === firstNode) {
          break;
        }
      }
      node = next;
    } while (node);
  }
});