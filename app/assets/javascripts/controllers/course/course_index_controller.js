App.CourseIndexController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	userIsOwner: function() {
		var course = this.get('model');
		var courseUserId = this.get('courseUserId');

		if(App.AuthManager.isAuthenticated()) {
			return App.AuthManager.get('apiKey.user.id') == courseUserId;
		}
		else {
			return false;
		}
	}.property('App.AuthManager.apiKey', 'courseUserId'),

	actions: {
		delete: function(course) {
			if(this.get('userIsOwner')) {
				var userConfirm = confirm("Are you sure you want to delete the course '" + course.get('name') + "'?");
				if(userConfirm) {
					var self = this;
					course.destroyRecord().then(self.transitionToRoute('courses'));
				} 
				else {
					this.transitionToRoute('course', course);
				}
			}
			else {
				alert("You must own the course to delete it.");
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