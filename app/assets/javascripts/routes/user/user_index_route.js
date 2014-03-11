App.UserIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('user');
	}
});