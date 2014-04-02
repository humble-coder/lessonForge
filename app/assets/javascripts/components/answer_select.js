App.AnswerSelectComponent = Ember.Component.extend({

	isMultipleChoice: function() {
		var question = this.get('question');
		var category = question.get('category');
		return category == 'multiple-choice';
	}.property('question'),
	
	confirm: ''
});