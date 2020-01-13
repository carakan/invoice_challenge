import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  description() {
    return faker.lorem.sentence();
  },

  subtotal(){
    return faker.finance.amount();
  }
});
