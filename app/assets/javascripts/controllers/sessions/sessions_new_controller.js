App.SessionsNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	validations: {
		username_or_email: {
			presence: true
		},

		password: {
			presence: true
		}
	},

	required_present: function() {
		return this.get('username_or_email') && this.get('password');
	},

	actions: {
		loginUser: function() {
			var data = this.getProperties('username_or_email', 'password');

			$.ajax({
				type: "POST",
				url: '/session',
				data: data,
				success: function(results) {
					Ember.run(function() {
						var user = results.session[0];
						var api_key = results.session[1];
						App.AuthManager.authenticate(api_key.access_token, user);
					});
				},
				dataType: 'json'
			});
			this.transitionToRoute('index');
		}
	}
});