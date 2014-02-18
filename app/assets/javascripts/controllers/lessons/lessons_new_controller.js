App.LessonsNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	needs: ['course'],

	validations: {
		name: {
			presence: { message: "Please enter a name for the lesson." }
		}
	},

	actions: {
		cancel: function(lesson) {
			lesson.deleteRecord();
			this.transitionToRoute('lessons.index');
		},

		submit: function(lesson) {
			var course = this.get('controllers.course').get('model');
			lesson.save();
			course.get('lessons').pushObject(lesson);
			this.transitionToRoute('lessons.index');
		}
	}
});