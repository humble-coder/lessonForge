App.LessonsNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	validations: {
		name: {
			presence: { message: "Please enter a name for the lesson." }
		}
	},

	actions: {
		submit: function(lesson) {
			lesson.save();
			this.transitionToRoute('lesson', lesson);
		},

		cancel: function(lesson) {
			lesson.deleteRecord();
			this.transitionToRoute('lessons');
		}
	}
});