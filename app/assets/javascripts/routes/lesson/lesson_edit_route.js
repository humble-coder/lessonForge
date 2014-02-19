App.LessonRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('lesson');
	}
});