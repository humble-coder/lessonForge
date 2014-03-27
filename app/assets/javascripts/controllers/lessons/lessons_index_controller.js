App.LessonsIndexController = Ember.ArrayController.extend({

	userIsOwner: function() {
		if(App.AuthManager.isAuthenticated()) {
			var userId = App.AuthManager.get('apiKey.user.id');
			if(!userId) {
				userId = App.AuthManager.get('apiKey.user');
			}
			var course = this.get('course');
			return this.store.find('course', { user_id: userId }).then(function(courses) {
				return courses.contains(course);
			});
		}
		else {
			return false;
		}
	}.property('App.AuthManager.apiKey', 'course'),

	actions: {
		new: function() {
			this.transitionToRoute('lessons.new');
		}
	}
});