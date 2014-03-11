App.CourseEditRoute = Ember.Route.extend({

	beforeModel: function(transition) {
		if(!App.AuthManager.isAuthenticated()) {
			alert("You must be signed in to edit a course.");
			this.redirectToLogin(transition);
		}
		else {
			var user_id = this.modelFor('course').get('user_id');
			if(!(App.AuthManager.get('apiKey.user.id') == user_id) {
				alert("You must own the course to edit it.");
				this.transitionTo('courses');
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
		return this.modelFor('course');
	}
});