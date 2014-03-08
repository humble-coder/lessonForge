App.ApplicationController = Ember.Controller.extend({
	currentUser: function() {
		return App.AuthManager.get('apiKey.user')
	}.property('App.AuthManager.apiKey'),

	isAuthenticated: function() {
		if(App.AuthManager.get('apiKey.user.name')) {
			return App.AuthManager.isAuthenticated();
		}
		else {
			App.AuthManager.reset();
			this.transitionToRoute('index');
		}	
	}.property('App.AuthManager.apiKey'),

	actions: {
		logout: function() {
			App.AuthManager.reset();
			this.transitionToRoute('index');
		}
	}
});

