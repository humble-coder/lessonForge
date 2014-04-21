module("Teacher deletes lesson from course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUser("8");
	andThen(function() {
		login("8");
		andThen(function() {
			createCourse();
			andThen(function() {
				createLesson();
				andThen(function() {
					ok(exists("#delete-lesson"), "Lesson index view has delete button displayed.");
					click("#delete-lesson");
					andThen(function() {
						ok(!exists("a:contains('New Lesson')"), "Link to lesson no longer displayed after deletion.");
						click("#logout");
					});
				});
			});
    });
  });
});