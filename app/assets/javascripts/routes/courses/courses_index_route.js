App.CoursesIndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('course');
	}
});