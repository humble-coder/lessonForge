App.LessonIndexController = Ember.ObjectController.extend({

	needs: ['course'],

	userIsOwner: function() {
		if(App.AuthManager.isAuthenticated()) {
			var userId = App.AuthManager.get('apiKey.user.id');
			if(!userId) {
				userId = App.AuthManager.get('apiKey.user');
			}
			var course_id = this.get('course_id');
			var course = this.store.find('course', course_id);
			return this.store.find('course', { user_id: userId }).then(function(courses) {
				return courses.contains(course);
			});
		}
		else {
			return false;
		}
	}.property('App.AuthManager.apiKey', 'course_id'),

	isComplete: function() {
		if(App.AuthManager.isAuthenticated()) {
			var userId = App.AuthManager.get('apiKey.user.id');
			if(!userId) {
				userId = App.AuthManager.get('apiKey.user');
			}
			var lesson = this.get('model');
			var questions = lesson.get('questions');
			return this.store.find('response', { user_id: userId, lesson_id: lesson.id }).then(function(responses) {
					return responses.get('length') == questions.get('length');
			});
		}
		else {
			return false;
		}
	}.property('App.AuthManager.apiKey', 'model'),

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

		saveResponse: function(responseContent, question) {
			var response = this.store.createRecord('response');
			var lesson = this.get('model');
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
			});
		},

		viewResponses: function() {
			this.transitionToRoute('responses');
		}
	}
});