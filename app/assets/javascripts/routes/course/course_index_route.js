App.CourseIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('course');
	}
});