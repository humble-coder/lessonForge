App.LessonEditController = Ember.ObjectController.extend({

	needs: ['course', 'question', 'answer'],

	isEditingLessonName: false,

	actions: {

		editLessonName: function() {
			this.set('isEditingLessonName', true);
		},

		updateLessonName: function(lesson) {
			var self = this;
			var course = this.get('course');
			lesson.set('course', course);
			lesson.set('course_id', course.id);
			lesson.save().then(self.set('isEditingLessonName'), false);
		},
		
		addAnswer: function(question) {
			var answers = question.get('answers');
			var answer = this.store.createRecord('answer');
			answer.set('question', question);
			answer.set('question_id', question.id);
			answers.pushObject(answer);
			this.get('controllers.answer').set('isEditing', true);
		},

		addQuestion: function() {
			var lesson = this.get('model');
			var questions = lesson.get('questions');
			var question = this.store.createRecord('question');
			question.set('lesson', lesson);
			question.set('lesson_id', lesson.id);
			questions.pushObject(question);
			this.get('controllers.question').set('isEditing', true);
		},

		done: function() {
			this.transitionToRoute('lesson.index');
		},

		saveQuestion: function(question) {
			var self = this;
			var lesson = this.get('model');
			question.set('lesson', lesson);
			question.set('lesson_id', lesson.id);
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

		saveAnswer: function(question, answer) {
			var self = this;
			answer.set('question', question);
			answer.set('question_id', question.id);
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