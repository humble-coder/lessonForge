App.CoursesNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	validations: {
		name: {
			presence: { message: "Please enter a name for your course." }
		}
	},

	actions: {
		submit: function(course) {
			course.save();
			Ember.run.later(this, (function() {
				this.transitionToRoute('course', course);
			}), 150);
		},

		cancel: function(course) {
			course.deleteRecord();
			this.transitionToRoute('courses');
		}
	}
});


