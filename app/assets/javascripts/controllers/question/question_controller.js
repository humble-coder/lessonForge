App.QuestionController = Ember.ObjectController.extend({

	questionTypes: ["multiple-choice", "essay"],

	selectedType: function() {
		var question = this.get('content');
		if(!question.get('content')) {
			return "multiple-choice";
		}
		else {
			var category = question.get('category');
			return category;
		}
	}.property('content'),

	isEditing: function() {
		var question = this.get('content');
		if(!question.get('content')) {
			return true;
		}
		else {
			return false;
		}
	}.property('content'),

	isMultipleChoice: function() {
		var question = this.get('content');
		var category = question.get('category');
		return category == "multiple-choice";
	}.property('content'),

	lessonComplete: function() {
		var lessonController = this.get('parentController');
		return lessonController.get('isComplete');
	}.property('parentController'),

	needs: ['lesson'],

	actions: {

		saveQuestion: function() {
			var self = this;
			var lesson = this.get('controllers.lesson').get('model');
			var question = this.get('content');
			var type = this.get('selectedType');
			if(type == "essay") {
				question.set('answers', null);
			}
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
		},

		saveResponse: function() {
			var response = this.store.createRecord('response');
			var lesson = this.get('controllers.lesson').get('model');
			var question = this.get('content');
			var responseContent = this.get('responseContent');
			var self = this;
			response.set('content', question.get('content') + ' Your Response: ' + responseContent);
			response.set('lesson', lesson);
			response.set('lesson_id', lesson.id);
			response.set('question', question);
			response.set('question_id', question.id);
			var userId = App.AuthManager.get('apiKey.user.id');
			if(!userId) {
				userId = App.AuthManager.get('apiKey.user');
			}
		  this.store.find('user', userId).then(function(user) {
				response.set('user', user);
				response.set('user_id', userId);
				response.save();
				self.set('responseSaved', true);
			});
		},
	}
});