module("Teacher edits course name", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function(){
	visit('/').then(function() {
		click("#courses");
		andThen(function() {
			fillIn("#new-course-name", "A new course");
			click("#save-course");
			andThen(function() {
				ok(exists(".edit-course"), "An edit-course link was found.");
				click(".edit-course");
				andThen(function() {
					fillIn("#edit-course-name", "Changed");
					click("#update-course");
					andThen(function() {
						ok(find("a:contains('Changed')").length, "A link to the changed course should display.");
					});
				});
			});	
		});
	});
}