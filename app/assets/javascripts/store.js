// http://emberjs.com/guides/models/using-the-store/
DS.ActiveModelAdapter.reopen({
	namespace: "api/v1"
});

App.Store = DS.Store.extend({

	adapter: '-active-model'
});
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
