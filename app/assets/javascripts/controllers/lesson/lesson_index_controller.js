App.LessonIndexController = Ember.ObjectController.extend({

	needs: ['course'],

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

		addQuestion: function(lesson) {
			var question = this.store.createRecord('question', {
				
			})
		}
	}
});