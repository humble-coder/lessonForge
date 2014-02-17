App.LessonsNewRoute = Ember.Route.extend({
	model: function() {
		course_id = this.modelFor('course').id;
		return this.store.createRecord('lesson', { course_id: course_id });
	}
});