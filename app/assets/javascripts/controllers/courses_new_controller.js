App.CoursesNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	validations: {
		name: {
			presence: { message: "A course must have a name." }
		}
	},

	actions: {
		save: function(course) {
			course.save();
			Ember.run.later(this, (function() {
				this.transitionToRoute('course', course);
			}), 150);
		}
	}
});


