App.LessonsNewController = Ember.ObjectController.extend(Ember.Validations.Mixin, {

	needs: ['course'],

	validations: {
		name: {
			presence: { message: "Please enter a name for the lesson." }
		}
	},

	actions: {
		cancel: function(lesson) {
			this.transitionToRoute('course', this.get('course'));
		},

		submit: function() {
			var course = this.get('controllers.course').get('model');
			$.ajax({
				type: "POST",
				url: "/courses/"+course.id+"/lessons",
				data: { "lesson": { "name": this.get('name') } },
				dataType: "json"
			});
			this.transitionToRoute('lessons.index');
		}
	}
});