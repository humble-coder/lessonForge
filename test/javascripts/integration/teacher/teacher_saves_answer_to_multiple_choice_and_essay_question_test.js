module("Teacher saves answer to multiple-choice and essay question", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {
	createUser("13");
	andThen(function() {
		login("13");
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
							andThen(function() {
								click("#done");
								andThen(function() {
									click(".mc-answer");
									click(".save-response");
									andThen(function() {
										ok("div:contains('Answer saved!')", "Lesson-index view shows that mc response was saved.");
										andThen(function() {
											click("#edit-lesson");
											andThen(function() {
												addQuestion("essay");
												andThen(function() {
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