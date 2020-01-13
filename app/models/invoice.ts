import DS from 'ember-data';
const { attr, hasMany } = DS;

export default class Invoice extends DS.Model.extend({
}) {
  @attr('string') client;
  @attr('number') total;
  @attr('date') createdAt;

  @hasMany('item') items;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'invoice': Invoice;
  }
}
