import DS from 'ember-data';
const { belongsTo } = DS;

export default class Items extends DS.Model.extend({
}) {
  @belongsTo('invoice') invoice;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'items': Items;
  }
}
