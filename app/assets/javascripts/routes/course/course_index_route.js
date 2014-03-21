App.CourseIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('course');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		if(model.get('user_id')) {
			controller.set('courseUserId', model.get('user_id'));
		}
		else {
			var self = controller;
			model.reload().then(function(model) {
				self.set('courseUserId', model.get('user_id'));
			});
		}
	}
});