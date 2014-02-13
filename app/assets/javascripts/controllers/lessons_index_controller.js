App.LessonsIndexController = Ember.ArrayController.extend({

	actions: {
		new: function() {
			this.transitionToRoute('lessons.new');
		}
	}
});