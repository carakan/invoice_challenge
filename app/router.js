import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('invoices', { path: '/' });

  this.route('invoice', {
    path: 'invoices/:invoice_id'
  });
});
