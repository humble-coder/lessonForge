App.UserRoute = Ember.Route.extend({
	model: function() {
		var user_id = App.AuthManager.get('apiKey.user.id');
		return this.store.find('user', user_id);
	}
});