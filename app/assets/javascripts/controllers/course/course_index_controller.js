App.CourseIndexController = Ember.ObjectController.extend({

	userIsRegistered: function() {
		var user = this.get('user');
		return !this.get('userIsOwner') && this.get('users').contains(user);
	}.property('userIsOwner', 'user'),

	actions: {
		delete: function(course) {
			var userConfirm = confirm("Are you sure you want to delete the course '" + course.get('name') + "'?");
			if(userConfirm) {
				var self = this;
				var user = this.get('user');

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
		},

		register: function(course) {
			var user = this.get('user');
			if(user) {
				var self = this;
				user.get('courses').then(function(courses) {
					courses.pushObject(course);
					course.get('users').then(function(users) {
						users.pushObject(user);
						course.save().then(self.set('registrationSuccess', 'You have registered for '  + course.get('name') + '!')).
						then(self.set('userIsRegistered', true));
					});
				});
			}
			else {
				alert("You must be signed in to register.")
				this.transitionToRoute('sessions.new');
			}
		}
	}
});