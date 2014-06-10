App.CoursesNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	needs: ['user'],

	validations: {
		name: {
			presence: { message: "Please enter a name for your course." }
		}
	},

	actions: {
		submit: function(course) {
			var user = this.get('controllers.user').get('model');
			var self = this;
			course.save().then(function(course) {
				self.transitionToRoute('course', course);
			});
		},

		cancel: function(course) {
			var user = this.get('controllers.user').get('model');
			this.transitionToRoute('user', user);
		}
	}
});


