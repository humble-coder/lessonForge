App.AnswerController = Ember.ObjectController.extend({
	isEditing: false,

	saveAnswer: function(question, answer) {
		var self = this;
		answer.set('question', question);
		answer.set('question_id', question.id);
		answer.save().then(self.set('isEditing'), false);
	},

	editAnswer: function() {
		this.set('isEditing', true);
	},

	removeAnswer: function(question, answer) {
		answers = question.get('answers');
		answer.destroyRecord().then(function(answer) {
			answers.removeObject(answer);
		});
		// answers.removeObject(answer);
		// answer.destroyRecord();
	}
});