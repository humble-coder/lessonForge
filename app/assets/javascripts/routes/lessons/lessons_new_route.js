App.LessonsNewRoute = Ember.Route.extend({

	beforeModel: function(transition) {
		if(!App.AuthManager.isAuthenticated()) {
			alert("You must be signed in to add a lesson to a course.");
			this.redirectToLogin(transition);
		}
		else {
			var course = this.modelFor('course');
			var user = this.modelFor('user');
			if(!user.get('courses').contains(course)) {
				alert("You must own the course to add a lesson to it.");
				this.transitionTo('course.index', course);
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
		var course_id = this.modelFor('course').id;
		var lesson = this.store.createRecord('lesson');
		this.store.find('course', course_id).then(function(course) {
			lesson.set('course_id', course_id);
			lesson.set('course', course);
		});
		return lesson;
	}
});