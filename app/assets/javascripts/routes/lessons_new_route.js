App.LessonsNewRoute = Ember.Route.extend({
	model: function() {
		var course_id = this.modelFor('course').id;
		var lesson = this.store.createRecord('lesson');
		this.store.find('course', course_id).then(function(course) {
			lesson.set('course_id', course_id);
			lesson.set('course', course);
		});
		return lesson;
	}
});