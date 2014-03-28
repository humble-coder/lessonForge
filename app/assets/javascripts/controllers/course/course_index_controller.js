App.CourseIndexController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	user: function() {
		var userId = this.get('userId');
		if(userId) {
			return this.store.find('user', userId).then(function(user) {
				return user;
			});
		}
		else {
			return null;
		}
	}.property('userId'),

	userIsOwner: function() {
		var courseId = this.get('model').id;
		if(this.get('user')) {
			var user = this.get('user');
			var course = this.store.find('course', courseId);
			return this.store.find('course', { user_id: user.id }).then(function(courses) {
				return courses.contains(course);
			});
		}
		else {
			return false;
		}
	}.property('App.AuthManager.apiKey', 'userId'),

	actions: {
		delete: function(course) {
			var userConfirm = confirm("Are you sure you want to delete the course '" + course.get('name') + "'?");
			if(userConfirm) {
				var self = this;
				var userId = App.AuthManager.get('apiKey.user.id');
				if(!userId) {
					userId = App.AuthManager.get('apiKey.user');
				}

				var user = this.store.find('user', userId);

				this.store.find('course', course.id).then(function(course) {
					course.destroyRecord().then(function(course) {
						user.get('courses').removeObject(course).then(self.transitionToRoute('user', user));
					});
				});
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