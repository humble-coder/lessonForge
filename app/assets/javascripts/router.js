// For more information see: http://emberjs.com/guides/routing/
App.Router.map(function() {
	this.resource("courses", function() {
		this.resource("course", { path: ":course_id" }, function() {
			this.route('edit');
			this.resource("lessons", function() {
				this.resource("lesson", { path: "lesson_id"}, function() {
					this.route('edit');
				});
				this.route('new');
			});
		});
		this.route('new');
	});
});