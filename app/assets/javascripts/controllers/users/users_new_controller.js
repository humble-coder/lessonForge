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


  required_present: function() {
    return (this.get('name') && this.get('email')) && (this.get('username')
      && this.get('password')) && this.get('password_confirmation')
  }.property('name', 'email', 'username', 'password', 'password_confirmation'),

	actions: {
		submit: function(user) {
      var self = this;
      user.save().then(self.transitionToRoute('sessions.new'), function(reason) {
        alert(reason.message);
        self.transitionToRoute('users.new');
      });
   	}
  }
});