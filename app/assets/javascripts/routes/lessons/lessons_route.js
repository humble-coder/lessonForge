App.LessonsRoute = Ember.Route.extend({
	model: function() {
		var course_id = this.modelFor('course').id;
		return this.store.find('course', course_id).then(function(course) {
			return course.get('lessons');
		});
	}
});