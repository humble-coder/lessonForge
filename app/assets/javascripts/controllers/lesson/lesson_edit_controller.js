App.LessonEditController = Ember.ObjectController.extend({

	needs: ['course'],

	isEditingLessonName: false,

	actions: {

		editLessonName: function() {
			this.set('isEditingLessonName', true);
		},

		updateLessonName: function(lesson) {
			var self = this;
			var course = this.get('course');
			lesson.set('course', course);
			lesson.set('course_id', course.id);
			lesson.save().then(self.set('isEditingLessonName'), false);
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