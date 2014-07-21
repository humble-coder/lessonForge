App.UserEditController = Ember.ObjectController.extend({

  required_present: true,
  
  actions: {
  	update: function(user) {
  		var self = this;
  		user.save().then(self.transitionToRoute('user', user));
  	},

  	cancel: function(user) {
  		user.rollback();
  		this.transitionToRoute('user', user);
  	}
  }
});