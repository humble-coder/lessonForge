App.CoursesIndexController = Ember.ArrayController.extend({
	isTeacher: function() {
		return App.AuthManager.isAuthenticated() && App.AuthManager.get('apiKey.user.teacher');
	}
});