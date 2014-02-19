App.LessonsRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('course').get('lessons');
	}
});