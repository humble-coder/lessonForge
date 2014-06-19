// For more information see: http://emberjs.com/guides/routing/
App.Router.map(function() {
	this.route('catchAll', {path: '*:' });
	this.resource("courses", function() {
		this.route('new');
		this.resource("course", { path: ":course_id" }, function() {
			this.route('edit');
			this.resource("lessons", function() {
				this.route('new');
				this.resource("lesson", { path: ":lesson_id" }, function() {
					this.route('edit');
					this.resource("responses");
				});
			});
		});
	});
	this.resource("question");
	this.resource("answer");
	this.resource("sessions", function() {
		this.route('new');
	});
	this.resource("users", function() {
		this.route('new');
		this.resource("user", { path: ":user_id" }, function() {
			this.route('edit');
		});
	});
});