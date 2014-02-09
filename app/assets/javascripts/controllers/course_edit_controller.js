App.CourseEditController = Ember.ObjectController.extend({
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