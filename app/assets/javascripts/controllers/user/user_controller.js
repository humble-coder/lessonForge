App.UserController = Ember.ObjectController.extend({
  actions: {
  	edit: function(user) {
  		this.transitionToRoute('user.edit', user);
  	}
  }
});