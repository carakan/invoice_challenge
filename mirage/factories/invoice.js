import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  client() {
    return faker.name.firstName();
  },

  total() {
    return faker.finance.amount();
  },

  publishedAt() {
    return faker.date.past();
  }
});
