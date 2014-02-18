App.LessonRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('lesson', params.lesson_id );
	}
});