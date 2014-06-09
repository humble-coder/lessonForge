module("Guest tries to edit course", {
	setup: function() {
		App.reset();
	}
});

test("unsuccessfully", function() {
	createUser("14");
	andThen(function() {
		login("14");
		andThen(function() {
			createCourse();
			andThen(function() {
				createLesson();
				andThen(function() {
					click("#edit-lesson");
					andThen(function() {
						addQuestion("multiple-choice");
						andThen(function() {
				  		addAnswer();
							click("#done");
							andThen(function() {
								click("#logout");
								andThen(function() {
									click("#courses");
									andThen(function() {
										click("a:contains('Course with a Lesson')");
										andThen(function() {
											ok(!exists("#edit-course"), "Edit-course button not displayed to user.");
											andThen(function() {
												visit('/courses/1/edit').then(function() {
													ok(!exists("#edit-course-name"), "Edit course-name-field not displayed to guest.");
													ok(exists("#username-or-email"), "Username-or-email login field displayed to guest.");
													ok(exists("#login-password"), "Login-password field displayed to guest.");
												});
											});
										});
									});
                });
              });
            });
          });
        });
      });
    });
  });
});