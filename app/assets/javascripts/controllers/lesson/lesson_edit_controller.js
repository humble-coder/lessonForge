App.LessonEditController = Ember.ObjectController.extend({

	needs: ['course', 'question', 'answer'],

	isEditingLessonName: false,

	actions: {

		editLessonName: function() {
			this.set('isEditingLessonName', true);
		},

		updateLessonName: function(lesson) {
			var self = this;
			lesson.save().then(self.set('isEditingLessonName'), false);
		},
		
		addAnswer: function(question) {
			answers = question.get('answers');
			answer = this.store.createRecord('answer');
			answer.set('question_id', question.id);
			answer.set('question', question);
			answers.pushObject(answer);
			this.get('controllers.answer').set('isEditing', true);
		},

		addQuestion: function(lesson) {
			questions = lesson.get('questions');
			question = this.store.createRecord('question');
			question.set('lesson_id', lesson.id);
			question.set('lesson', lesson);
			questions.pushObject(question);
			this.get('controllers.question').set('isEditing', true);
		},

		done: function() {
			this.transitionToRoute('lesson.index');
		},

		saveQuestion: function(question) {
			var self = this;
			question.save().then(self.get('controllers.question').set('isEditing', false));
		},

		editQuestion: function() {
			this.get('controllers.question').set('isEditing', true);
		},

		removeQuestion: function(question) {
			var lesson = this.get('model');
			questions = lesson.get('questions');
			questions.removeObject(question);
			question.destroyRecord();
		},

		saveAnswer: function(answer) {
			var self = this;
			answer.save().then(self.get('controllers.answer').set('isEditing'), false);
		},

		editAnswer: function() {
			this.get('controllers.answer').set('isEditing', true);
		},

		removeAnswer: function(question, answer) {
			answers = question.get('answers');
			answers.removeObject(answer);
			answer.destroyRecord();
		}
	}
});