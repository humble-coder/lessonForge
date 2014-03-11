module("Teacher edits course name", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function(){

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("full-name", "Bob6");
			fillIn("#email-address", "bob6@something.com");
			fillIn("#username", "bob6");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				fillIn("#username-or-password", "bob6");
				fillIn("#login-password", "something");
				click("#new-session");
				andThen(function() {
					click(".new-course-button");
					andThen(function() {
					  fillIn("#new-course-name", "Course to Edit");
						click("#save-course");
						andThen(function() {
							ok(exists("#edit-course"), "Course has edit-course link.");
							click("#edit-course");
							andThen(function() {
								fillIn("#edit-course-name", "Edited Course");
								click("#update-course");
								andThen(function() {
									ok(exists("h2:contains('Edited Course')"), "Edited course has new header.");
								});
							});
						});
					});
				});
			});
		});
	});
});

test("without saving the changes (cancelling)", function(){

	visit('/').then(function() {
		click("#courses");
		andThen(function() {
			click("#new-course");
			fillIn("#new-course-name", "Will not Change");
			click("#save-course");
			andThen(function() {
				ok(exists("#edit-course"), "Course has edit-course link.");
				click("#edit-course");
				andThen(function() {
					fillIn("#edit-course-name", "Changed");
					click("#cancel-update");
					andThen(function() {
						ok(exists("h2:contains('Will not Change')"), "Course has same name.");
						click("#logout");
					});
				});
			});
		});
	});
});