module("Guest tries to edit course", {
	setup: function() {
		App.reset();
	}
});

test("unsuccessfully", function() {
	
	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "test1");
			fillIn("#email-address", "test1@something.com");
			fillIn("#username", "test1");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "test1");
				fillIn("#login-password", "something");
				click("#new-session");
				andThen(function() {
					click("#new-course");
					andThen(function() {
						fillIn("#new-course-name", "Test1 Course");
						click("#save-course");
						andThen(function() {
							click("#view-lessons");
							andThen(function() {
								click("#new-lesson");
								andThen(function() {
									fillIn("#new-lesson-name", "Test1 Lesson");
									click("#save-lesson");
									andThen(function() {
										click("#edit-lesson");
										andThen(function() {
											click("#new-question");
											andThen(function() {
												fillIn(".question-content", "Test1 Question");
												andThen(function() {
													click(".save-question");
													click(".add-answer");
													fillIn(".answer-content", "Test1 Answer");
													click(".save-answer");
													click("#done");
													andThen(function() {
														click("#logout");
														andThen(function() {
															click("#courses");
															andThen(function() {
																click("a:contains('Test1 Course')");
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
        });
      });
    });
  });
});