App.LessonsNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	needs: ['course'],

	course: Ember.computed.alias("controllers.course.model"),

	validations: {
		name: {
			presence: { message: "Please enter a name for the lesson." }
		}
	},

	actions: {
		cancel: function(lesson) {
			lesson.deleteRecord();
			this.transitionToRoute('course', this.get('course'));
		},

		submit: function(lesson) {
			lesson.save();
			this.transitionToRoute('lessons.index');
		}
	}
});