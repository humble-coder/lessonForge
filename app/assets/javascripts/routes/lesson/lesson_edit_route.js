App.LessonEditRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('lesson.index');
	}
});