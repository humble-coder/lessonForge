App.CourseEditRoute = Ember.Route.extend({

	model: function() {
		return this.store.createRecord('course');
	},

	actions: {
		update: function() {
			this.get('currentModel').save();
			this.transitionTo('courses');
		}			
	}
});