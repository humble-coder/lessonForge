App.CourseIndexController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	isOwner: function() {
		var user_id = this.get('model').get('user_id');
		return (App.AuthManager.isAuthenticated() && (App.AuthManager.get('apiKey.user.id') == user_id));
	},

	actions: {
		delete: function(course) {
			var userConfirm = confirm("Are you sure you want to delete the course '" + course.get('name') + "'?");
			if(userConfirm){
				course.destroyRecord();
				this.transitionToRoute('courses');
			} else {
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