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
				user.get('courses').pushObject(course)
			}).then(function() {
				self.transitionToRoute('course', course);
			});
		},

		cancel: function(course) {
			var self = this;
			course.deleteRecord().then(self.transitionToRoute('courses'));
		}
	}
});


