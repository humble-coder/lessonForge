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
			course.save();
			user.get('courses').pushObject(course);
			Ember.run.later(this, (function() {
				this.transitionToRoute('course', course);
			}), 200);
		},

		cancel: function(course) {
			course.deleteRecord();
			this.transitionToRoute('courses');
		}
	}
});


