App.LessonIndexController = Ember.ObjectController.extend({

	confirm: '',

	needs: ['course'],

	userIsOwner: function() {
		var course = this.get('controllers.course').get('model');
		var user_id = course.get('user_id');
		return (App.AuthManager.isAuthenticated() && (App.AuthManager.get('apiKey.user.id') == user_id));
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
					lessons.removeObject(lesson);
					lesson.destroyRecord().then(self.transitionToRoute('lessons'));
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