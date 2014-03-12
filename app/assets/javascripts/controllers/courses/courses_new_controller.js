App.CoursesNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	needs: ['user'],

	validations: {
		name: {
			presence: { message: "Please enter a name for your course." }
		}
	},

	actions: {
		submit: function(course) {
			var self = this;
			var user = this.get('controllers.user').get('model');
			course.save().then(function() {
				user.get('courses').pushObject(course);
				self.transitionToRoute('course', course);
			});
		},

		cancel: function(course) {
			course.deleteRecord();
			this.transitionToRoute('courses');
		}
	}
});


