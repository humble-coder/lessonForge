App.AnswerSelectComponent = Ember.Component.extend({

	isMultipleChoice: function() {
		var question = this.get('question');
		var category = question.get('category');
		return category == 'multiple-choice';
	}.property('question'),
	
	response: '',

	feedback: '',

	actions: {
		saveResponse: function(question) {
			var responseContent = this.get('response');
			this.sendAction('action', responseContent, question);
			this.set('feedback', 'Answer saved!');
		}
	}
});