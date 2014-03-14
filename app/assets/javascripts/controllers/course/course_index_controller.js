App.CourseIndexController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	userIsOwner: function() {
		var user_id = this.get('model').get('user_id');
		return (App.AuthManager.isAuthenticated() && (App.AuthManager.get('apiKey.user.id') == user_id));
	}.property('App.AuthManager.apiKey'),

	actions: {
		delete: function(course) {
			if(this.get('userIsOwner')) {
				var userConfirm = confirm("Are you sure you want to delete the course '" + course.get('name') + "'?");
				if(userConfirm) {
					course.destroyRecord();
					this.transitionToRoute('courses');
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