module("Teacher deletes course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUser("7");
	andThen(function() {
		login("7");
		andThen(function() {
			createCourse();
			andThen(function() {
				ok(exists("#delete-course"), "Course has delete-course link.");
				click("#delete-course");
				andThen(function() {
					ok(!exists("a:contains('Course to Delete')"), "Course has no link in courses.index view.");
					click("#logout");
				});
			});
		});
	});
});