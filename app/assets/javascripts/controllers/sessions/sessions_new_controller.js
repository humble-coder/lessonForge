App.SessionsNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	validations: {
		username_or_email: {
			presence: true
		},

		password: {
			presence: true
		}
	},

	attemptedTransition: null,

	error: '',

	required_present: function() {
		return this.get('username_or_email') && this.get('password');
	}.property('username_or_email', 'password'),

	actions: {
		loginUser: function(session) {
			var self = this;
			var router = this.get('target');
			var data = this.getProperties('username_or_email', 'password');
			var attemptedTrans = this.get('attemptedTransition');

			$.ajax({
				type: "POST",
				url: '/session',
				data: data,
				success: function(results) {
					Ember.run(function() {
						var user = results.session[0];
						var api_key = results.session[1];
						App.AuthManager.authenticate(api_key.access_token, user);
						if (attemptedTrans) {
							user = self.store.find('user', user.id);
							attemptedTrans.retry();
							self.set('attemptedTransition', null);
						}
						else {
							self.store.find('user', user.id).then(function(user) {
								router.transitionTo('user', user);
							});
						}
					});
				},
				error: function(results) {
					self.set('error', results.responseText);
				},
				dataType: 'json'
			});
		}
	}
});