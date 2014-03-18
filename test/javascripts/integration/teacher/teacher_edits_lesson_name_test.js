module("Teacher edits lesson name", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob11@something.com");
			fillIn("#username", "bob11");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob11");
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
										ok(exists("#edit-lesson-name"), "Lesson-edit template has edit-lesson-name button.");
										click("#edit-lesson-name");
										andThen(function() {
											ok(exists("#lesson-name"), "Lesson-edit template shows input field for lesson name.");
											fillIn("#lesson-name", "Updated Lesson");
											ok(exists("#update-lesson-name"), "Lesson-edit template shows update-lesson-name button.");
											click("#update-lesson-name");
											andThen(function() {
												ok(exists("h3:contains('Updated Lesson')"), "Lesson name updated.");
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
