module("Teacher creates course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob3");
			fillIn("#email-address", "bob3@something.com");
			fillIn("#username", "bob3");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob3");
				fillIn("#login-password", "something");
				click("#new-session");
				andThen(function() {
					ok(exists("#new-course"), "User profile view has new-course button.");
					click("#new-course");
					andThen(function() {
						fillIn("#new-course-name", "A new course");
						equal(find("#new-course-name").val(), "A new course", "Name field contains the string 'A new course.'");
						click("#save-course");
						andThen(function() {
							ok(exists("h2:contains('A new course')", "Course view has name of new course."));
							click("#user-profile-link");
							andThen(function() {
								ok(exists("a:contains('A new course')"), "Teacher profile view has link to teacher's new course.");
		          	click("a:contains('A new course')");
		          	andThen(function() {
		          		ok(exists("h2:contains('A new course')"), "And the link works.");
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

test("without a name (unsuccessfully)", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob4");
			fillIn("#email-address", "bob4@something.com");
			fillIn("#username", "bob4");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-email", "bob4");
				fillIn("#login-password", "something");
				click("#new-session");
				andThen(function() {
					click("#new-course");
					andThen(function() {
						ok(!exists("#save-course"), "New-course view does not have save button.");
						click("#logout");
					});
				});
			});
		});
	});
});

test("but cancels (unsuccessfully)", function() {
	visit('/').then(function() {
		click("#login");
		andThen(function() {
			fillIn("#username-or-email", "bob4");
			fillIn("#login-password", "something");
			click("#new-session");
			andThen(function() {
				click("#new-course");
				andThen(function() {
					ok(exists("#cancel-new-course"), "New-course view has cancel-new-course button displayed.");
					fillIn("#new-course-name", "Another new course");
					click("#cancel-new-course");
					andThen(function() {
						ok(!exists("a:contains('Another new course')"), "User view doesn't have course listed.");
						click("#logout");
					});
				});
			});
		});
	});
});