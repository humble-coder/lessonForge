App.LessonIndexController = Ember.ObjectController.extend({

	confirm: '',

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