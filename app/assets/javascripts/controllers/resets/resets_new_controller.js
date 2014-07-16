App.ResetsNewController = Ember.ObjectController.extend({

	message: '',

  actions: {
  	resetPassword: function() {
      var self = this;
			var data = this.getProperties('username_or_email');

			$.ajax({
				type: "POST",
				url: '/password_reset',
				data: data,
				success: function(results) {
					Ember.run(function() {
						self.set('message', results.responseText);
					});
				},
				error: function(results) {
					Ember.run(function() {
						self.set('message', results.responseText);
					});
				},
				dataType: 'json'
			});
  	}
  }
});