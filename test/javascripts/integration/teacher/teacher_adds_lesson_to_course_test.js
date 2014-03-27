module("Teacher adds lesson to course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob@something.com");
			fillIn("#username", "bob");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob");
				fillIn("#login-password", "something");
				click("#new-session");
				andThen(function() {
					click("#new-course");
					fillIn("#new-course-name", "Course with a Lesson");
					click("#save-course");
					andThen(function() {
						ok(exists("#view-lessons"), "Course view has view-lessons button.");
						click("#view-lessons");
						andThen(function() {
							ok(exists("#new-lesson"), "Course view has new-lesson button.");
							click("#new-lesson");
							andThen(function() {
								ok(exists("#new-lesson-name"), "New-lesson view has input field for lesson name.");
								fillIn("#new-lesson-name", "New Lesson");
								equal(find("#new-lesson-name").val(), "New Lesson", "New-lesson-name field has string 'New Lesson.'");
								click("#save-lesson");
								andThen(function() {
									ok(exists("h3:contains('New Lesson')"), "Lesson index view has title of new displayed.");
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


test("without saving (cancelling)", function() {
	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob1");
			fillIn("#email-address", "bob1@something.com");
			fillIn("#username", "bob1");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			andThen(function() {
				click("#create-user");
				andThen(function() {
					fillIn("#username-or-email", "bob1");
					fillIn("#login-password", "something");
					click("#new-session");
					andThen(function() {
					  click("#new-course");
						fillIn("#new-course-name", "Course with a Canceled Lession");
						click("#save-course");
						andThen(function() {
							click("#view-lessons");
							andThen(function() {
								click("#new-lesson");
								andThen(function() {
									fillIn("#new-lesson-name", "Changed my mind");
									click("#cancel-new-lesson");
									andThen(function() {
										ok(!exists("a:contains('Changed my mind')"), "New lesson link not present.");
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