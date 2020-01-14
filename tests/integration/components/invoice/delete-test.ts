import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupMirage } from "ember-cli-mirage/test-support";

module('Integration | Component | invoice/delete', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    let invoice = this.server.create('invoice');
    this.set('invoice', invoice);

    await render(hbs`<Invoice::Delete @invoice={{invoice}} />`);

    assert.equal(this.element.textContent.trim(), 'x');
    await click('button');
    invoic = this.store.peekRecord('invoice', invoice.id);
    assert.notOk(invoic);
  });
});
