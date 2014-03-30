App.QuestionController = Ember.ObjectController.extend({

	isEditing: function() {
		return false;
	},

	needs: ['lesson', 'answer'],

	actions: {

		saveQuestion: function() {
			var self = this;
			var lesson = this.get('controllers.lesson').get('model');
			var question = this.get('content');
			question.set('lesson', lesson);
			question.set('lesson_id', lesson.id);
			question.save().then(self.set('isEditing', false));
		},

		editQuestion: function() {
			this.set('isEditing', true);
		},

		removeQuestion: function() {
			var question = this.get('content');
			var lesson = this.get('controllers.lesson').get('model');
			lesson.get('questions').then(function(questions) {
				questions.removeObject(question);
				question.destroyRecord();
			});
		},

		addAnswer: function(question) {
			var answers = question.get('answers');
			var answer = this.store.createRecord('answer');
			answer.set('question', question);
			answer.set('question_id', question.id);
			answers.pushObject(answer);
			this.get('controllers.answer').set('isEditing', true);
		}
	}
});