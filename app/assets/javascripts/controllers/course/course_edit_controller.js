App.CourseEditController = Ember.ObjectController.extend(Ember.Validations.Mixin, {
	
	validations: {
		name: {
			presence: { message: "Please enter a name for your course." }
		}
	},
	
	actions: {
		update: function(course) {
			course.save();
			this.transitionToRoute('course', course);
		},

		cancel: function(course) {
			course.rollback();
			this.transitionToRoute('course', course);
		}
	}
});