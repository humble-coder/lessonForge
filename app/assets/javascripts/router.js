// For more information see: http://emberjs.com/guides/routing/
App.Router.map(function() {
	this.resource("courses", function() {
		this.route('new');
		this.resource("course", { path: ":course_id" }, function() {
			this.route('edit');
			this.resource("lessons", function() {
				this.route('new');
				this.resource("lesson", { path: ":lesson_id" }, function() {
					this.route('edit');
				});
			});
		});
	});
	this.resource("sessions", function() {
		this.route('new');
	});
	this.resource("users", function() {
		this.route('new');
	});
});