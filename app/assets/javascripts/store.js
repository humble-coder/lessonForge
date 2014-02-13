// http://emberjs.com/guides/models/using-the-store/

App.Store = DS.Store.extend({
	adapter: '-active-model'
});
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
App.ApplicationSerializer = DS.ActiveModelSerializer.extend({});