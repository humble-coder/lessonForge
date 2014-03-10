module("Teacher views own courses", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "New Teacher");
			fillIn("#email-address", "new_teacher@example.com");
			fillIn("#username", "new");
			fillIn("#password", "password");
			fillIn("#password-confirmation", "password");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				click("a:contains('Logout')");
				andThen(function() {
					click("#login");
					andThen(function() {
						fillIn("#username-or-email", "new_teacher@example.com");
						fillIn("#login-password", "password");
						click("#new-session");
						andThen(function() {
							ok(exists("#my-courses"), "View has my-courses button displayed.");
							click("#my-courses");
							andThen(function() {
								ok(exists("#new-course"), "View has new-course button displayed.");
								click("#new-course");
								andThen(function() {
									fillIn("#new-course-name", "New Course");
									click("#save-course");
									andThen(function() {
										ok(exists("a:contains('New Course')"), "View has link to new course displayed.");
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