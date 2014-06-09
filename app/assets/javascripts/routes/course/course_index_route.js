App.CourseIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('course');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		controller.set('registrationSuccess', '');
		if(App.AuthManager.isAuthenticated()) {
			var userId = App.AuthManager.get('apiKey.user.id');
			if(!userId) {
			  userId = App.AuthManager.get('apiKey.user');
			}
			var self = this;
			this.store.find('user', userId).then(function(user) {
				model.get('users').then(function(users) {
					var isOwner = users.contains(user) && user.get('teacher');
					controller.set('userIsOwner', isOwner);
					controller.set('user', user);
				});
			});
		}
		else {
			controller.set('userIsOwner', false);
			controller.set('user', null);
		}
	}
});