App.UserIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('user');
	},

	setupController: function(controller, model) {
	controller.set('model', model);
	if(App.AuthManager.isAuthenticated()) {
		var userId = App.AuthManager.get('apiKey.user.id') || App.AuthManager.get('apiKey.user');
		this.store.find('user', userId).then(function(user) {
		  var otherUserId = model.get('id');
		  controller.set('isOwner', userId == otherUserId);
		});
	}
	else {
		controller.set('isOwner', false);
	}
}
});