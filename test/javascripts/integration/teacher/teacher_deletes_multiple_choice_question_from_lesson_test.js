module("Teacher deletes multiple-choice question from lesson", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob10@something.com");
			fillIn("#username", "bob10");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob10");
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
										click("#new-question");
										andThen(function() {
											fillIn(".question-content", "New Question");
											andThen(function() {
												click(".save-question");
												andThen(function() {
													ok(exists(".remove-question"), "Lesson-edit view has remove-question button.");
													click(".remove-question");
													click("#done");
													andThen(function() {
														ok(!exists("span:contains('New Question')"), "Lesson index template has no question displayed.");
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