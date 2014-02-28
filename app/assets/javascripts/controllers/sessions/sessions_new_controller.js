App.SessionsNewController = Ember.ObjectController.extend({
	actions: {
		loginUser: function() {
			var data = this.getProperties('username_or_email', 'password');

			$.ajax({
				type: "POST",
				url: '/session',
				data: data,
				success: function(results) {
					var user = results.session[0];
					var api_key = results.session[1];
					App.AuthManager.authenticate(api_key.access_token, user);
				},
				dataType: 'json'
			});

			this.transitionToRoute('index');
		}
	}
})