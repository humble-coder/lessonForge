App.LessonsIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('lessons');
	}
});