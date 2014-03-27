App.LessonIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('lesson');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		var course_id = this.modelFor('course').id;
		controller.set('course_id', course_id);
	}
});