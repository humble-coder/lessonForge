// For more information see: http://emberjs.com/guides/routing/
App.Router.map(function() {
	this.resource("courses", function() {
		this.resource("course", { path: ":course_id" });
	});
});