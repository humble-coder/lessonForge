App.ResponsesController = Ember.ArrayController.extend({

	actions: {
		backToLesson: function() {
			this.transitionToRoute('lesson.index');
		}
	}
});