App.ApplicationRoute = Ember.Route.extend({
	init: function() {
		this._super();
		App.AuthManager = AuthManager.create();
	}
});