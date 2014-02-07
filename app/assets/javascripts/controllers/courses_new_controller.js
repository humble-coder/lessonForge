App.CoursesNewController = Ember.ObjectController.extend({
	actions: {
		save: function(course) {
			course.save();
			this.transitionToRoute('course', course);
		}
	}
});


