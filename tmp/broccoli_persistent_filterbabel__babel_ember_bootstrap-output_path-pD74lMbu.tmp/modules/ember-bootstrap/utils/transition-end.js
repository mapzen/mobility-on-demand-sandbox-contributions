import Ember from 'ember';
import transitionEnd from './transition-support';

var _Ember$run = Ember.run,
    join = _Ember$run.join,
    cancel = _Ember$run.cancel,
    later = _Ember$run.later;


export default function onTransitionEnd(node, handler, context) {
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!node) {
    return;
  }
  var fakeEvent = {
    target: node,
    currentTarget: node
  };
  var backup = void 0;

  if (transitionEnd) {
    node.addEventListener(transitionEnd, done, false);

    backup = later(this, done, fakeEvent, duration);
  } else {
    later(this, done, fakeEvent, 0);
  }

  function done(event) {
    if (backup) {
      cancel(backup);
    }
    event.target.removeEventListener(transitionEnd, done);
    join(context, handler, event);
  }
}