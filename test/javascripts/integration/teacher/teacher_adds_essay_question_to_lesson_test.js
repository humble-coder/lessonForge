module("Teacher adds essay question to lesson", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob15");
			fillIn("#email-address", "bob15@something.com");
			fillIn("#username", "bob15");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob15");
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
											fillIn(".question-content", "New Essay Question");
										  fillIn(".question-category", "essay");
											andThen(function() {
												click(".save-question");
												click("#done");
												andThen(function() {
													ok(exists("span:contains('New Essay Question')"), "Lesson view has question displayed.");
													ok(exists(".essay-space"), "Lesson view has essay question's text area displayed.");
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
