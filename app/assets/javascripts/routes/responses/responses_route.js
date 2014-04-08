App.ResponsesRoute = Ember.Route.extend({

	beforeModel: function(transition) {
		if(!App.AuthManager.isAuthenticated()) {
			alert("You must be signed in to view your responses to a lesson.");
			this.redirectToLogin(transition);
		}
	},

	model: function() {
		var userId = App.AuthManager.get('apiKey.user.id');
		if(!userId) {
			userId = App.AuthManager.get('apiKey.user');
		}
		var lessonId = this.modelFor('lesson').id;
    return this.store.find('response', { user_id: userId, lesson_id: lessonId });
	}
});