import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('submit', function() {
    this.route('license');
    this.route('source');
    this.route('contact');
    this.route('data');
    this.route('column-mapping');
    this.route('success');
    this.route('intro');
    this.route('review');
  });
});

export default Router;
