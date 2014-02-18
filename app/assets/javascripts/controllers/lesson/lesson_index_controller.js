App.LessonIndexController = Ember.ObjectController.extend({
	actions: {
		delete: function(lesson) {
			lesson.destroyRecord();
			this.transitionToRoute('lessons.index');
		}
	}
});