App.ApplicationController = Ember.Controller.extend({
	currentUser: function() {
		if(this.get('isAuthenticated')) {
			if(!App.AuthManager.get('apiKey.user.name')) {
				var user_id = App.AuthManager.get('apiKey.user');
				return this.store.find('user', user_id);
			}
			else {
				var user_id = App.AuthManager.get('apiKey.user.id');
				return this.store.find('user', user_id);
			}
		}
	}.property('App.AuthManager.apiKey'),

	isAuthenticated: function() {
		return App.AuthManager.isAuthenticated();
	}.property('App.AuthManager.apiKey'),

	actions: {
		logout: function() {
			App.AuthManager.reset();
			this.transitionToRoute('index');
		}
	}
});

