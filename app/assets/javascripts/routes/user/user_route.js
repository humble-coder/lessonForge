App.UserRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('user', params.user_id).then(function(user) {
			return user;
		});
	}
});