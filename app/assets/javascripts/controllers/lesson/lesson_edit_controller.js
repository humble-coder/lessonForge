App.LessonEditController = Ember.ObjectController.extend({

	needs: ['course'],

	actions: {
		addAnswer: function(question) {
			answers = question.get('answers');
			answer = this.store.createRecord('answer', {
				question: question,
				content: ''
			});
			answers.pushObject(answer);
		},

		addQuestion: function(lesson) {
			questions = lesson.get('questions');
			question = this.store.createRecord('question');
			this.store.find('lesson', lesson.id).then(function(lesson) {
				question.set('lesson_id', lesson.id);
				question.set('lesson', lesson);
			});
			questions.pushObject(question);
		},

		submit: function(lesson) {
			// var course = this.get('controllers.course').get('model');
			// this.store.find('course', course.id).then(function(course) {
			// 	lesson.set('course_id', course.id);
			// 	lesson.set('course', course);
			// });
			lesson.save();
			this.transitionToRoute('lesson.index');
		}
	}
});