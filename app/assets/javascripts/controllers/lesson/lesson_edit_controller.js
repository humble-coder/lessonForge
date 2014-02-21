App.LessonEditController = Ember.ObjectController.extend({

	needs: ['course'],

	actions: {
		addAnswer: function(question) {
			answers = question.get('answers');
			answer = this.store.createRecord('answer');
			this.store.find('question', question.id).then(function(question) {
				answer.set('question_id', question.id);
				answer.set('question', question);
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

		done: function(lesson) {
			this.transitionToRoute('lesson.index');
		},

		saveQuestion: function(question) {
			question.save();
		},

		saveAnswer: function(answer) {
			answer.save();
		},

		removeAnswer: function(answer) {
			answer.destroyRecord();
		}
	}
});