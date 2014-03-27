module("Teacher deletes lesson from course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob9@something.com");
			fillIn("#username", "bob9");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob9");
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
									ok(exists("#delete-lesson"), "Lesson index view has delete button displayed.");
									click("#delete-lesson");
									andThen(function() {
										ok(!exists("a:contains('New Lesson')"), "Link to lesson no longer displayed after deletion.");
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