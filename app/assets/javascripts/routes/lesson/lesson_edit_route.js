App.LessonEditRoute = Ember.Route.extend({

	beforeModel: function(transition) {
		if(!App.AuthManager.isAuthenticated()) {
			alert("You must be signed in to edit a lesson.");
			this.redirectToLogin(transition);
		}
		else {
			var lesson = this.modelFor('lesson');
			var course = this.modelFor('course');
			var userId = App.AuthManager.get('apiKey.user.id');
			var self = this;
			if(!userId) {
				userId = App.AuthManager.get('apiKey.user');
			}

      this.store.find('user', userId).then(function(user) {
      	user.get('courses').then(function(courses) {
      		if(!courses.contains(course)) {
      			alert("You must own the course to edit one of its lessons.");
      			self.transitionTo('lesson', lesson);
      		}
      	});
      });
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
			console.log(reason);
			this.redirectToLogin(transition);
		}
	},
	
	model: function() {
		return this.modelFor('lesson');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		var course = this.modelFor('course');
		controller.set('course', course);
	}
});