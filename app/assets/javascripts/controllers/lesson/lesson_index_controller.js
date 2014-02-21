App.LessonIndexController = Ember.ObjectController.extend({

	actions: {
		delete: function(lesson) {
			var userConfirm = confirm("Are you sure you want to delete the lesson '" + lesson.get('name') + "'?");
			if (userConfirm) {
				lesson.destroyRecord();
				this.transitionToRoute('lessons');
			}
			else {
				this.transitionToRoute('lesson', lesson);
			}
		},

		edit: function() {
			this.transitionToRoute('lesson.edit');
		}
	}
});