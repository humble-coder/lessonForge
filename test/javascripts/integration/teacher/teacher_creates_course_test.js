module("Teacher creates course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUser("5");
	andThen(function() {
		login("5");
		andThen(function() {
			ok(exists("#new-course"), "User profile view has new-course button.");
			click("#new-course");
			andThen(function() {
				fillIn("#new-course-name", "A new course");
				equal(find("#new-course-name").val(), "A new course", "Name field contains the string 'A new course.'");
				andThen(function() {
					fillIn("#new-course-summary", "Summary");
					equal(find("#new-course-summary").val(), "Summary", "Summary field contains the string 'Summary.'");
					andThen(function() {
						click("#save-course");
						andThen(function() {
							ok(exists("h2:contains('A new course')", "Course view has name of new course."));
							andThen(function() {
								click("#user-profile-link");
								andThen(function() {
									ok(exists("a:contains('A new course')"), "Teacher profile view has link to teacher's new course.");
									andThen(function() {
										click("a:contains('A new course')");
		        				andThen(function() {
		          				ok(exists("h2:contains('A new course')"), "The course's name displays after clicking the link.");
		          				andThen(function() {
		          					ok(exists("p:contains('Summary')"), "And its summary displays too.");
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

test("without a name (unsuccessfully)", function() {
	visit("/").then(function() {
		click("#login");
		andThen(function() {
			login("5");
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

test("but cancels (unsuccessfully)", function() {
	visit('/').then(function() {
		click("#login");
		andThen(function() {
			login("5");
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