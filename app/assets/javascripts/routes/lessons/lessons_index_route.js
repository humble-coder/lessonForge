App.LessonsIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('lessons');
	},

	setupController: function(controller, model) {
		controller.set('model', model);
		var course_id = this.modelFor('course').id;
		var course = this.store.find('course', course_id);
		controller.set('course', course);
	}
});