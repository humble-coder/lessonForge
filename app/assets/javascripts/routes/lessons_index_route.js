App.LessonsIndexRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('lesson', { course_id: params.course_id });
	}
});