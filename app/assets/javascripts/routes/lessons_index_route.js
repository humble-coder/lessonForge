App.LessonsIndexRoute = Ember.Route.extend({
	model: function() {
		var course_id = this.modelFor('course').id;
		return this.store.find('lesson', { course_id: course_id });
	}
});