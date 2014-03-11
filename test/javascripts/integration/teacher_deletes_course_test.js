module("Teacher deletes course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function(){

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("full-name", "Bob5");
			fillIn("#email-address", "bob5@something.com");
			fillIn("#username", "bob5");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-password", "bob5");
				fillIn("#login-password", "something");
				click("#new-session");
				andThen(function() {
					click(".new-course-button");
					andThen(function() {
					  fillIn("#new-course-name", "Course to Delete");
						click("#save-course");
						andThen(function() {
							ok(exists("#delete-course"), "Course has delete-course link.");
							click("#delete-course");
							andThen(function() {
								ok(!exists("a:contains('Course to Delete'"), "Course has no link in courses.index view.");
								click("#logout");
							});
						});
					});
				});
			});
		});
	});
});