App.LessonsIndexController = Ember.ArrayController.extend({

	needs: ['course', 'user'],

	userIsOwner: function() {
		var course = this.get('controllers.course').get('model');
		var user = this.get('controllers.user').get('model');
		if(App.AuthManager.isAuthenticated()) {
			if(user) {
				return user.get('courses').contains(course);
			}
		}
		else {
			return false;
		}
	}.property('App.AuthManager.apiKey'),

	actions: {
		new: function() {
			this.transitionToRoute('lessons.new');
		}
	}
});