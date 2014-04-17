module("Teacher saves answer to multiple-choice and essay question", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob16@something.com");
			fillIn("#username", "bob16");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob16");
				fillIn("#login-password", "something");
				click("#new-session");
				andThen(function() {
					click("#new-course");
					fillIn("#new-course-name", "Course with a Lesson");
					click("#save-course");
					andThen(function() {
						click("#view-lessons");
						andThen(function() {
							click("#new-lesson");
							andThen(function() {
								fillIn("#new-lesson-name", "New Lesson");
								click("#save-lesson");
								andThen(function() {
									click("#edit-lesson");
									andThen(function() {
										click("#new-question");
										andThen(function() {
											fillIn(".question-content", "New Question");
											andThen(function() {
												click(".save-question");
												click(".add-answer");
												fillIn(".answer-content", "New Answer");
												click(".save-answer");
												click("#done");
												andThen(function() {
													click(".mc-answer");
													click(".save-response");
													andThen(function() {
														ok("div:contains('Answer saved!')", "Lesson-index view shows that mc response was saved.");
														andThen(function() {
															click("#edit-lesson");
															andThen(function() {
															  click("#new-question");
																fillIn(".question-category", "essay");
																fillIn(".question-content", "Another Question");
																click(".save-question");
																click("#done");
																andThen(function() {
																	fillIn(".essay-space", "Some Answer");
																	click(".save-response");
																	ok("div:contains('Answer saved!')", "Lesson-index view shows that mc response was saved.");
																	andThen(function() {
																		click("#finish-lesson");
																		andThen(function() {
																			click("#view-responses");
																			andThen(function() {
																				ok("div:contains('Your Response: Some Answer')", "Responses view shows user response to essay question.");
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