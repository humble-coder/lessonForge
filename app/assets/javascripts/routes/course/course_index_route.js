App.CourseIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('course');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		var user = this.modelFor('user');
		controller.set('user', user);
	}
});