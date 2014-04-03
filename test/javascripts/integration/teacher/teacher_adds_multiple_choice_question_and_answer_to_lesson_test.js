module("Teacher adds multiple-choice question and answer to lesson", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob2@something.com");
			fillIn("#username", "bob2");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob2");
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
									ok(exists("#edit-lesson"), "Lesson view has edit-lesson button.");
									click("#edit-lesson");
									andThen(function() {
										ok(exists("#new-question"), "Lesson-edit view has new-question button.");
										click("#new-question");
										andThen(function() {
											ok(exists(".question-content"), "Lesson-edit view has new-question input box.");
											fillIn(".question-content", "New Question");
											ok(exists(".question-category"), "Lesson-edit view has question-category select box.");
											andThen(function() {
												click(".save-question");
												click(".add-answer");
												fillIn(".answer-content", "New Answer");
												click(".save-answer");
												click("#done");
												andThen(function() {
													ok(exists("span:contains('New Question')"), "Lesson view has question displayed.");
													ok(exists("div:contains('New Answer')"), "Lesson view has question's answer displayed.");
													andThen(function() {
														click("#edit-lesson");
														andThen(function() {
															click(".remove-question");
															andThen(function() {
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

test("with blank names for question and answer (unsuccessfully)", function() {
	visit("/").then(function() {
		click("#login");
		andThen(function() {
			fillIn("#username-or-email", "bob2");
			fillIn("#login-password", "something");
			click("#new-session");
			andThen(function() {
				click("a:contains('Course with a Lesson')");
				andThen(function() {
					click("#view-lessons");
					andThen(function() {
						click("a:contains('New Lesson')");
						andThen(function() {
						  click("#edit-lesson");
						  andThen(function() {
						  	click("#new-question");
						  	andThen(function() {
						  		fillIn(".question-content", "");
						  		ok(!exists(".save-question"), "Lesson-edit view doesn't have save-question button when question content is blank.");
						  		fillIn(".question-content", "New Question");
						  		click(".save-question");
						  		andThen(function() {
						  			click(".add-answer");
						  			fillIn(".answer-content", "");
						  			ok(!exists(".save-answer"), "Lesson-edit view doesn't have save-answer button when answer content is blank.");
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