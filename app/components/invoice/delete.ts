import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

interface InvoiceDeleteArgs {
  args: {
    invoice: any
  }
}

export default class Delete extends Component<InvoiceDeleteArgs> {
  @service router;

  @action
  deleteInvoice() {
    this.args.invoice.destroyRecord();
    this.router.transitionTo('invoices');
  }
}
