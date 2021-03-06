App.CoursesNewRoute = Ember.Route.extend({

	beforeModel: function(transition) {
		if(!App.AuthManager.isAuthenticated()) {
			alert("You must be signed in to create a course.");
			this.redirectToLogin(transition);
		}
		else {
			if(!App.AuthManager.get('apiKey.user.name')) {
				var user = this.modelFor('user');
				if(!user.get('teacher')) {
					alert("You must be a teacher to create courses.");
			  	this.transitionTo('index');
				}
		  }
		  else {
		  	if(!App.AuthManager.get('apiKey.user.teacher')) {
		  		alert("You must be a teacher to create courses.");
			  	this.transitionTo('index');
		  	}
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
		var user = this.modelFor('user');
		var course = this.store.createRecord('course');
		course.get('users').then(function(users) {
			users.pushObject(user);
		});
		return course;
	}
});