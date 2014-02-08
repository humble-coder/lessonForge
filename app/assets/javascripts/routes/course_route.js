App.CourseRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('course', params.course_id);
	}
});