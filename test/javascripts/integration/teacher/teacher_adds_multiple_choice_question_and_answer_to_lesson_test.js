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
									ok(exists("#edit-lesson"), "Lesson view has edit-lesson button.");
									click("#edit-lesson");
									andThen(function() {
										ok(exists("#new-question"), "Lesson-edit view has new-question button.");
										click("#new-question");
										andThen(function() {
											ok(exists(".question-content"), "Lesson-edit view has new-question input box.");
											fillIn(".question-content", "New Question");
											andThen(function() {
												click(".save-question");
												click(".add-answer");
												fillIn(".answer-content", "New Answer");
												click(".save-answer");
												click("#done");
												andThen(function() {
													ok(exists("span:contains('New Question')"), "Lesson view has question displayed.");
													ok(exists("div:contains('New Answer')"), "Lesson view has question's answer displayed.");
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