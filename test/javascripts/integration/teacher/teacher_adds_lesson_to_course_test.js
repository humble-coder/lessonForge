module("Teacher adds lesson to course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUser("3");
	andThen(function() {
	  login("3");
		andThen(function() {
		  createCourse();
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
						andThen(function() {
							fillIn("#new-lesson-summary", "Summary");
							equal(find("#new-lesson-summary").val(), "Summary", "New-lesson-summary field has string 'Summary.'");
							andThen(function() {
								click("#save-lesson");
								andThen(function() {
									ok(exists("h3:contains('New Lesson')"), "Lesson index view has title of new displayed.");
									click("#logout");
								})
							});
						});
					});
				});
			});
		});
	});
});

test("without saving (cancelling)", function() {
	visit("/").then(function() {
		click("#login");
		andThen(function() {
			login("3");
			andThen(function() {
				createCourse();
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