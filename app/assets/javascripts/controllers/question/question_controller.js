App.QuestionController = Ember.ObjectController.extend({

	questionTypes: ["multiple-choice", "essay"],

	selectedType: "multiple-choice",

	isEditing: function() {
		var question = this.get('content');
		if(!question.get('content')) {
			return true;
		}
		else {
			return false;
		}
	}.property('content'),

	isMultipleChoice: true,

	needs: ['lesson'],

	actions: {

		saveQuestion: function() {
			var self = this;
			var lesson = this.get('controllers.lesson').get('model');
			var question = this.get('content');
			var type = this.get('selectedType');
			question.set('lesson', lesson);
			question.set('lesson_id', lesson.id);
			question.set('category', type);
			question.save().then(self.set('isEditing', false)).then(function() {
				if(type == "multiple-choice") {
					self.set('isMultipleChoice', true);
				}
				else {
					self.set('isMultipleChoice', false);
				}
			});
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
		}
	}
});