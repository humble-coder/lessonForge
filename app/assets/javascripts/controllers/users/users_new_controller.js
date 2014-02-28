App.UsersNewController = Ember.ObjectController.extend({

	actions: {
		submit: function(user) {
    	var data = this.getProperties('name', 'email', 'username', 'password', 'password_confirmation');

    	$.ajax({
    		type: "POST",
    		url: '/users',
    		data: { user: data },
    		success: function(results) {
          var user = results.users[0];
          var api_key = results.users[1];
    			App.AuthManager.authenticate(api_key.access_token, user);
    		},
    		dataType: 'json'
    	});

     this.transitionToRoute('index');
   	}
  }
});