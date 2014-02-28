App.UsersNewController = Ember.ObjectController.extend({

	actions: {
		submit: function(user) {

    	var data = this.getProperties('name', 'email', 'username', 'password', 'password_confirmation');

    	$.ajax({
    		type: "POST",
    		url: '/users',
    		data: { user: data },
    		success: function(results) {
    			App.AuthManager.authenticate(results.api_key.access_token, user);
    		},
    		dataType: 'json'
    	});

     this.transitionToRoute('index');
   	}
  }
});