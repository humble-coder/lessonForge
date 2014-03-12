App.LessonsIndexController = Ember.ArrayController.extend({

	needs: ['course'],

	userIsOwner: function() {
		var course = this.get('controllers.course').get('model');
		var user_id = course.get('user_id');
		return (App.AuthManager.isAuthenticated() && (App.AuthManager.get('apiKey.user.id') == user_id));

	},

	actions: {
		new: function() {
			this.transitionToRoute('lessons.new');
		}
	}
});