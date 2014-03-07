App.LessonEditController = Ember.ObjectController.extend({

	needs: ['course', 'question', 'answer'],

	actions: {
		addAnswer: function(question) {
			answers = question.get('answers');
			answer = this.store.createRecord('answer');
			this.store.find('question', question.id).then(function(question) {
				answer.set('question_id', question.id);
				answer.set('question', question);
			});
			answers.pushObject(answer);
			this.get('controllers.answer').set('isEditing', true);
		},

		addQuestion: function(lesson) {
			questions = lesson.get('questions');
			question = this.store.createRecord('question');
			this.store.find('lesson', lesson.id).then(function(lesson) {
				question.set('lesson_id', lesson.id);
				question.set('lesson', lesson);
			});
			questions.pushObject(question);
			this.get('controllers.question').set('isEditing', true);
		},

		done: function() {
			this.transitionToRoute('lesson.index');
		},

		saveQuestion: function(question) {
			question.save();
			this.get('controllers.question').set('isEditing', false);
		},

		editQuestion: function() {
			this.get('controllers.question').set('isEditing', true);
		},

		removeQuestion: function(question) {
			question.destroyRecord();
		},

		saveAnswer: function(answer) {
			answer.save();
			this.get('controllers.answer').set('isEditing', false);
		},

		editAnswer: function() {
			this.get('controllers.answer').set('isEditing', true);
		},

		removeAnswer: function(answer) {
			answer.destroyRecord();
		}
	}
});