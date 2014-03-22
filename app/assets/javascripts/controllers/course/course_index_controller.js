App.CourseIndexController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	userIsOwner: function() {
		var course = this.get('model');
		var user = this.get('user');

		if(App.AuthManager.isAuthenticated()) {
			if(user) {
				return user.get('courses').contains(course);
			}
		}	
		else {
			return false;
		}
	}.property('App.AuthManager.apiKey', 'user', 'course'),

	actions: {
		delete: function(course) {
			var userConfirm = confirm("Are you sure you want to delete the course '" + course.get('name') + "'?");
			if(userConfirm) {
				var self = this;
				var user = this.get('user');
				var courses = user.get('courses');
				course.destroyRecord().then(courses.removeObject(course)).then(self.transitionToRoute('user', user));
			} 
			else {
				this.transitionToRoute('course', course);
			}
		},

		edit: function(course) {
			this.transitionToRoute('course.edit', course);
		},

		viewLessons: function() {
			this.transitionToRoute('lessons.index');
		}
	}
});