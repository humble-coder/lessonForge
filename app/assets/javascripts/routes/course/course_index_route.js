App.CourseIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('course');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		if(App.AuthManager.isAuthenticated()) {
			var userId = App.AuthManager.get('apiKey.user.id');
			if(!userId) {
			  userId = App.AuthManager.get('apiKey.user');
			}
			controller.set('userId', userId);
		}
		else {
			controller.set('userId', null);
		}
	}
});