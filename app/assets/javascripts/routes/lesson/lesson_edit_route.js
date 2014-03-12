App.LessonEditRoute = Ember.Route.extend({

	beforeModel: function(transition) {
		if(!App.AuthManager.isAuthenticated()) {
			alert("You must be signed in to edit a lesson.");
			this.redirectToLogin(transition);
		}
		else {
			var course = this.modelFor('course.index');
			var user_id = course.get('user_id');
			if(!(App.AuthManager.get('apiKey.user.id') == user_id)) {
				alert("You must own the lesson to edit it.");
				this.transitionTo('lesson.index', lesson);
			}
		}

	},
  
  // Redirect to the login page and store the current transition so that
  // it can be run again after login
	redirectToLogin: function(transition) {
    var sessionNewController = this.controllerFor('sessions.new');
    sessionNewController.set('attemptedTransition', transition);
    this.transitionTo('sessions.new');
	},

	actions: {
		error: function(reason, transition) {
			this.redirectToLogin(transition);
		}
	},
	
	model: function() {
		return this.modelFor('lesson.index');
	}
});