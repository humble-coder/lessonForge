App.LessonIndexController = Ember.ObjectController.extend({

	needs: ['course'],

	isComplete: function() {
		var responses = this.get('responseCount');
		var questions = this.get('questionCount');
		return responses >= questions;
	}.property('responseCount', 'questionCount'),

	responseCount: 0,

	questionCount: 0,

	questionCountUpdate: function() {
		var self = this;
		var lesson = this.get('model');
		var lessonId = lesson.id;
		this.store.find('question', { lesson_id: lessonId }).then(function(questions) {
			var count = questions.get('content').get('length');
			console.log(count);
			self.set('questionCount', count);
		});
	}.observes('question'),

	responseCountUpdate: function() {
		var self = this;
		var lesson = this.get('model');
		var lessonId = lesson.id;
		var userId = App.AuthManager.get('apiKey.user.id');
		if(!userId) {
			userId = App.AuthManager.get('apiKey.user');
		}
		this.store.find('response', { lesson_id: lessonId, user_id: userId }).then(function(responses) {
			var count = responses.get('content').get('length');
			console.log(count);
			self.set('responseCount', count);
		});
	}.observes('response'),

	actions: {
		delete: function(lesson) {
			var self = this;
			if(this.get('userIsOwner')) {
				var userConfirm = confirm("Are you sure you want to delete the lesson '" + lesson.get('name') + "'?");
				if (userConfirm) {
					var self = this;
					var course = this.get('controllers.course').get('model');
					lessons = course.get('lessons');
					lesson.destroyRecord().then(lessons.removeObject(lesson)).then(self.transitionToRoute('lessons'));
				}
				else {
					this.transitionToRoute('lesson', lesson);
				}
			}
			else {
				alert("You must own the course to delete a lesson from it.");
				this.transitionToRoute('lesson', lesson);
			}	
		},

		edit: function() {
			this.transitionToRoute('lesson.edit');
		},

		viewResponses: function() {
			this.transitionToRoute('responses');
		}
	}
});