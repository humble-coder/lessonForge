App.LessonsNewRoute = Ember.Route.extend({
	model: function() {
		//var course = this.modelFor('course');
		return this.store.createRecord('lesson');
	}
});