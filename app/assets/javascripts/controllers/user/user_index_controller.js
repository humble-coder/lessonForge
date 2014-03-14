App.UserIndexController = Ember.ObjectController.extend({
	isOwner: function() {
		var user_id = this.get('model').id;
		return (App.AuthManager.isAuthenticated() && (App.AuthManager.get('apiKey.user.id') == user_id));
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