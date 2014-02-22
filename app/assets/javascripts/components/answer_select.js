App.AnswerSelectComponent = Ember.Component.extend({
	actions: {
		checkAnswer: function(value) {
			if(value) {
				this.toggleProperty('confirmAnswer');
			}
		}
	}
});