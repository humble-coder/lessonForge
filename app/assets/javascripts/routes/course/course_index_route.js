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
			var self = this;
			this.store.find('course', { user_id: userId }).then(function(courses) {
				var isOwner = courses.contains(model);
				controller.set('userIsOwner', isOwner);
				self.store.find('user', userId).then(function(user) {
					controller.set('user', user);
				});
			});
		}
		else {
			controller.set('userId', null);
			controller.set('userIsOwner', false);
		}
	}
});