App.LessonsIndexController = Ember.ArrayController.extend({
	actions: {
		newLesson: function() {
			this.transitionToRoute('lessons.new');
		}
	}
});