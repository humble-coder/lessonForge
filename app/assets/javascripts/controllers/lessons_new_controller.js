App.LessonsNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	needs: ['course'],

	validations: {
		name: {
			presence: { message: "Please enter a name for the lesson." }
		}
	},

	actions: {
		cancel: function(lesson) {
			var course = this.get('controllers.course').get('model');
			lesson.deleteRecord();
			this.transitionToRoute('course', course);
		},

		submit: function() {
			var course = this.get('controllers.course').get('model');
			$.ajax({
				type: "POST",
				url: "/courses/"+course.id+"/lessons",
				data: { "lesson": { "name": this.get('name') } },
				dataType: "json"
			});
			Ember.run.later(this, (function() {
				this.transitionToRoute('lessons.index');
			}), 150);
		}
	}
});