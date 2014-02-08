App.CoursesNewController = Ember.ObjectController.extend({
	actions: {
		save: function(course) {
			course.save();
			Ember.run.later(this, (function() {
				this.transitionToRoute('course', course);
			}), 100);
		}
	}
});


