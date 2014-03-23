module("Teacher edits question and answer content", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob13@something.com");
			fillIn("#username", "bob13");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob13");
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
												ok(exists(".edit-question"), "Lesson view has question-edit button");
												click(".edit-question");
												fillIn(".question-content", "Updated Question");
												click(".save-question");
												click(".add-answer");
												fillIn(".answer-content", "New Answer");
												click(".save-answer");
												andThen(function() {
													ok(exists(".edit-answer"), "Lesson view has answer-edit button.");
													click(".edit-answer");
													fillIn(".answer-content", "Updated Answer");
													click(".save-answer");
													click("#done");
													andThen(function() {
														ok(exists("span:contains('Updated Question')"), "Lesson view has edited question displayed.");
														ok(exists("div:contains('Updated Answer')"), "Lesson view has edited answer displayed.");
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

test("with blank content for both question and answer (unsuccessfully)", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob14@something.com");
			fillIn("#username", "bob14");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob14");
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
												click(".edit-question");
												fillIn(".question-content", "");
												ok(!exists(".save-question"), "Lesson view has blurred save-question button when content is blank.");
												click(".add-answer");
												fillIn(".answer-content", "New Answer");
												click(".save-answer");
												andThen(function() {
													click(".edit-answer");
													fillIn(".answer-content", "");
													andThen(function() {
														ok(!exists(".save-answer"), "Lesson view has blurred save-answer button when content is blank.");
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