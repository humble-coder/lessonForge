App.AnswerSelectComponent = Ember.Component.extend({

	isMultipleChoice: function() {
		var question = this.get('question');
		var category = question.get('category');
		return category == 'multiple-choice';
	}.property('question'),

	responseSaved: false,

	lessonComplete: function() {
		var controller = this.get('controller');
		return controller.get('isComplete');
	}.property('controller'),

	canSaveResponse: function() {
		var result = !(this.get('responseSaved') || this.get('lessonComplete'));
		return result;
	}.property('responseSaved', 'lessonComplete'),
	
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