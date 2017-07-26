import Ember from 'ember';

var isArray = Ember.isArray,
    A = Ember.A;


export function bsContains(params /* , hash*/) {
  return isArray(params[0]) ? A(params[0]).includes(params[1]) : false;
}

export default Ember.Helper.helper(bsContains);