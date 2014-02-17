App.LessonsNewRoute = Ember.Route.extend({
	model: function(params) {
		var course_id = this.modelFor('course').id
		return Ember.$.getJSON('/courses/'+course_id+'/lessons/new');
	}
});