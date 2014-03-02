App.UsersNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

  validations: {
    name: { 
      presence: true
    },

    email: {
      presence: true
    },

    username: {
      presence: true
    },

    password: {
      presence: true
    },

    password_confirmation: {
      presence: true
    }
  },

  all_present: function() {
    return (this.get('name') && this.get('email')) && (this.get('username')
      && this.get('password')) && this.get('password_confirmation')
  }.property('name', 'email', 'username', 'password', 'password_confirmation'),

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