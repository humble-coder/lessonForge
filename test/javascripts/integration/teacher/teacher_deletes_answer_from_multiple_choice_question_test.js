module("Teacher deletes answer from multiple-choice question", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob12@something.com");
			fillIn("#username", "bob12");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob12");
				fillIn("#login-password", "something");
				click("#new-session");
				andThen(function() {
					click(".new-course-button");
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
												andThen(function() {
													click(".add-answer")
													fillIn(".answer-content", "New Answer");
													click(".save-answer");
													ok(exists(".remove-answer"), "Remove-answer button is displayed.");
													click(".remove-answer");
													click("#done");
													andThen(function() {
														ok(exists("span:contains('New Question')"), "Lesson index template has question displayed.");
														ok(!exists("div:contains('New Answer')"), "Lesson index template has no answers displayed.");
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