App.LessonsIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('lessons');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		var course_id = this.modelFor('course').id;
		var course = this.store.find('course', course_id);
		controller.set('course', course);
		var self = this;
		if(App.AuthManager.isAuthenticated()) {
			var userId = App.AuthManager.get('apiKey.user.id');
			if(!userId) {
				userId = App.AuthManager.get('apiKey.user');
			}
			var course = self.store.find('course', course_id);
			self.store.find('course', { user_id: userId }).then(function(courses) {
				var isOwner = courses.contains(course.get('content'));
				controller.set('userIsOwner', isOwner);
			});
		}
		else {
			controller.set('userIsOwner', false);
		}
	}
});