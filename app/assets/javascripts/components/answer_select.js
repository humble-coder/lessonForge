App.AnswerSelectComponent = Ember.Component.extend({

	isMultipleChoice: function() {
		var question = this.get('question');
		var category = question.get('category');
		return category == 'multiple-choice';
	}.property('question'),

	responseSaved: false,

	lessonComplete: function() {
		return this.get('isComplete');
	}.property('isComplete'),

	canSaveResponse: function() {
		// var result = !(this.get('responseSaved') || this.get('lessonComplete'));
		// return result;
		return !this.get('responseSaved');
	}.property('responseSaved'),
	
	response: '',

	feedback: '',

	actions: {
		saveResponse: function(question) {
			this.set('responseSaved', true);
			var responseContent = this.get('response');
			this.sendAction('action', responseContent, question);
			this.set('feedback', 'Answer saved!');
		}
	}
});