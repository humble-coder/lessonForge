App.CourseEditRoute = Ember.Route.extend({

	model: function() {
		return this.modelFor('course');
	},

	actions: {
		save: function() {
			this.get('currentModel').save();
			this.transitionTo('course');
		}
	}
});