App.UserIndexController = Ember.ObjectController.extend({
	isOwner: function() {
		var user_id = this.get('model').id;
		if(App.AuthManager.isAuthenticated()) {
			if(!App.AuthManager.get('apiKey.user.name')) {
				return user_id == App.AuthManager.get('apiKey.user');
			}
			else {
				return user_id == App.AuthManager.get('apiKey.user.id');
			}
		}
		else {
			return false;
		}
	}.property('App.AuthManager.apiKey'),

	actions: {

		edit: function(user) {
		  this.transitionToRoute('user.edit', user);
		},

		createCourse: function() {
		  this.transitionToRoute('courses.new');
	  }
	}
})