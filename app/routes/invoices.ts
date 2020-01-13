import Route from '@ember/routing/route';

export default class Invoices extends Route.extend({
}) {
  model() {
    return this.store.findAll('invoice');
  }
}
