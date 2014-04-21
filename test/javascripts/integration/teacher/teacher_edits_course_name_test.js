module("Teacher edits course name", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUser("10");
	andThen(function() {
		login("10");
		andThen(function() {
			createCourse();
			andThen(function() {
				ok(exists("#edit-course"), "Course has edit-course link.");
				click("#edit-course");
				andThen(function() {
					fillIn("#edit-course-name", "Edited Course");
					click("#update-course");
					andThen(function() {
						ok(exists("h2:contains('Edited Course')"), "Edited course has new header.");
						click("#logout");
					});
				});
			});
		});
	});
});

test("without saving the changes (cancelling)", function() {
	visit("/").then(function() {
		click("#login");
		andThen(function() {
			login("10");
			andThen(function() {
				click("a:contains('Edited Course')");
				andThen(function() {
					ok(exists("#edit-course"), "Course has edit-course link.");
					click("#edit-course");
					andThen(function() {
						fillIn("#edit-course-name", "Changed");
						click("#cancel-update");
						andThen(function() {
							ok(exists("h2:contains('Edited Course')"), "Course has same name.");
							click("#logout");
						});
					});
				});
			});
		});
  });
});

test("without filling in the course-name field (unsuccessfully)", function() {
	visit("/").then(function() {
		click("#login");
		andThen(function() {
			login("10");
			andThen(function() {
				click("a:contains('Edited Course')");
				andThen(function() {
					click("#edit-course");
					andThen(function() {
						fillIn("#edit-course-name", "");
						ok(!exists("#update-course"), "Course-edit view doesn't have update button without course name.");
						click("#logout");
					});
				});
			});
		});
	});
});