import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default class Item extends DS.Model.extend({
}) {
  @attr('string') description;
  @attr('number') subtotal;

  @belongsTo('invoice') invoice;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'item': Item;
  }
}
