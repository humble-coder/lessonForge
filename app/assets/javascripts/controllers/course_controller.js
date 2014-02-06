App.CourseController = Ember.ObjectController.extend({
	actions: {
		delete: function(course) {
			var userConfirm = confirm("Are you sure you want to delete the course '" + course.get('name') + "'?");
			if(userConfirm){
				course.destroyRecord();
				this.transitionToRoute('courses');
			} else {
				this.transitionToRoute('course');
			}
		}
	}
})