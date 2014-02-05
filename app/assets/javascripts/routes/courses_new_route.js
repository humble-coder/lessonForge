App.CoursesNewRoute = Ember.Route.extend({

	model: function() {
		return this.store.createRecord('course');
	},

	actions: {
		save: function() {
			this.get('currentModel').save();
			this.transitionTo('courses');
		}			
	}
});