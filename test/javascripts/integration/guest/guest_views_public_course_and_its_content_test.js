module("Guest views public course and its content", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "test");
			fillIn("#email-address", "test@something.com");
			fillIn("#username", "test");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "test");
				fillIn("#login-password", "something");
				click("#new-session");
				andThen(function() {
					click("#new-course");
					andThen(function() {
						fillIn("#new-course-name", "Test Course");
						click("#save-course");
						andThen(function() {
							click("#view-lessons");
							andThen(function() {
								click("#new-lesson");
								andThen(function() {
									fillIn("#new-lesson-name", "Test Lesson");
									click("#save-lesson");
									andThen(function() {
										click("#edit-lesson");
										andThen(function() {
											click("#new-question");
											andThen(function() {
												fillIn(".question-content", "Test Question");
												andThen(function() {
													click(".save-question");
													click(".add-answer");
													fillIn(".answer-content", "Test Answer");
													click(".save-answer");
													click("#done");
													andThen(function() {
														click("#logout");
														andThen(function() {
							  							click("#courses");
							  							andThen(function() {
							  								ok(exists("a:contains('Test Course')"), "Guest user sees public course in list of courses.");
							  								click("a:contains('Test Course')");
							  								andThen(function() {
							  									ok(exists("h2:contains('Test Course')"), "Guest user sees course after clicking on it.");
							  									click("#view-lessons");
							  									andThen(function() {
							  										ok(exists("a:contains('Test Lesson')"), "Guest user sees link to course's lesson.");
							  										click("a:contains('Test Lesson')");
							  										andThen(function() {
							  											ok(exists("h3:contains('Test Lesson')"), "Guest user sees lesson.");
							  											ok(exists("span:contains('Test Question')"), "Guest user sees question.");
																			ok(exists("div:contains('Test Answer')"), "Guest user sees question's answer.");
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