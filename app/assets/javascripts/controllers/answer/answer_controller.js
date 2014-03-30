App.AnswerController = Ember.ObjectController.extend({

	isEditing: function() {
		var answer = this.get('content');
		if(!answer.get('content')) {
			return true;
		}
		else {
			return false;
		}
	}.property('content'),

	actions: {

		saveAnswer: function(question) {
			var self = this;
			var answer = this.get('content');
			answer.set('question_id', question.id);
			answer.set('question', question);
			answer.save().then(self.set('isEditing'), false);
		},

		editAnswer: function() {
			this.set('isEditing', true);
		},

		removeAnswer: function(question) {
			var answer = this.get('content');
			question.get('answers').then(function(answers) {
				answers.removeObject(answer);
				answer.destroyRecord();
			});
		}
	}	
});