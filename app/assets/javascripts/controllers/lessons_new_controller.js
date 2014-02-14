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
			var course = this.get('course');
			lesson.save().then(function() {
				course.get('lessons').pushObject(lesson);
				course.save();
			});
			
			this.transitionToRoute('lessons.index');
		}
	}
});