import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('login');
    this.route('protected');
    this.route('forgot');
    this.route('reset', {path: "reset/:token"});
    this.route("some", {path: "some/:some"});
});

export default Router;
