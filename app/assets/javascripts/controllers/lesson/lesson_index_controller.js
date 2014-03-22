App.LessonIndexController = Ember.ObjectController.extend({

	confirm: '',

	needs: ['course', 'user'],

	userIsOwner: function() {
		var course = this.get('controllers.course').get('model');
		var user = this.get('controllers.user').get('model');
		if(App.AuthManager.isAuthenticated()) {
			if(user) {
				return user.get('courses').contains(course);
			}
		}
		else {
			return false;
		}
	}.property('App.AuthManager.apiKey'),

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
		}
	}
});