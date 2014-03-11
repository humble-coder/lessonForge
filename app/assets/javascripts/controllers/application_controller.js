App.ApplicationController = Ember.Controller.extend({
	currentUser: function() {
		var user_id = App.AuthManager.get('apiKey.user.id');
		return this.store.find('user', user_id);
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

