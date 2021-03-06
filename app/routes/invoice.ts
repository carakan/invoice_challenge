import Route from '@ember/routing/route';

export default class Invoice extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model(params) {
    return this.store.findRecord('invoice', params.invoice_id, { include: 'items' });
  }
}
