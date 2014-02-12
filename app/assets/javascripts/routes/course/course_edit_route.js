App.CourseEditRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('course');
	}
});