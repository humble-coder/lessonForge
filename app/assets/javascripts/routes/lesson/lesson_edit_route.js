App.LessonEditRoute = Ember.Route.extend({

	beforeModel: function(transition) {
		if(!App.AuthManager.isAuthenticated()) {
			alert("You must be signed in to edit a lesson.");
			this.redirectToLogin(transition);
		}
		else {
			var lesson = this.modelFor('lesson');
			var course = this.modelFor('course');
			var user = this.modelFor('user');
			if(!user.get('courses').contains(course)) {
				alert("You must own the course to edit one of its lessons.");
				this.transitionTo('lesson', lesson);
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