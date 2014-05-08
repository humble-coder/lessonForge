App.LessonEditController = Ember.ObjectController.extend({

	needs: ['course'],

	isEditing: false,

	actions: {

		editLessonSummaryOrName: function() {
			this.set('isEditing', true);
		},

		updateLessonSummaryOrName: function(lesson) {
			var self = this;
			var course = this.get('course');
			lesson.set('course', course);
			lesson.set('course_id', course.id);
			lesson.save().then(self.set('isEditing'), false);
		},

		addQuestion: function() {
			var lesson = this.get('model');
			var question = this.store.createRecord('question');
			question.set('lesson', lesson);
			question.set('lesson_id', lesson.id);
			lesson.get('questions').then(function(questions) {
				questions.pushObject(question);
			});
		},

		done: function() {
			this.transitionToRoute('lesson.index');
		}
	}
});