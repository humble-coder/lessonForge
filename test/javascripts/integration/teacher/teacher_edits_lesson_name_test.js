module("Teacher edits lesson name", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUser("11");
	andThen(function() {
		login("11");
		andThen(function() {
			createCourse();
			andThen(function() {
				createLesson();
				andThen(function() {
					click("#edit-lesson");
					andThen(function() {
						ok(exists("#edit-lesson-name"), "Lesson-edit template has edit-lesson-name button.");
						click("#edit-lesson-name");
						andThen(function() {
							ok(exists("#lesson-name"), "Lesson-edit template shows input field for lesson name.");
							fillIn("#lesson-name", "Updated Lesson");
							ok(exists("#update-lesson-name"), "Lesson-edit template shows update-lesson-name button.");
							click("#update-lesson-name");
							andThen(function() {
								ok(exists("h3:contains('Updated Lesson')"), "Lesson name updated.");
								click("#logout");
							});
						});
					});
				});
			});
    });
  });
});

test("without filling in lesson-name field (unsuccessfully)", function() {
	visit('/').then(function() {
		click("#login");
		andThen(function() {
			login("11");
			andThen(function() {
				click("a:contains('Course with a Lesson')");
				andThen(function() {
					click("#view-lessons");
					andThen(function() {
						click("a:contains('Updated Lesson')");
						andThen(function() {
							click("#edit-lesson");
							andThen(function() {
								click("#edit-lesson-name");
								andThen(function() {
									fillIn("#lesson-name", "");
									ok(!exists("#update-lesson-name"), "Update-lesson-name button not shown when lesson name is blank.");
									click("#logout");
								});
							});
			      });
					});
				});
			});
		});
	});
});
