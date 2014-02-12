App.LessonsNewRoute = Ember.Route.extend({
	model: function() {
		return this.store.createRecord('lesson');
	}
})