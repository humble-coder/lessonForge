module("Teacher adds feedback to question", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {
	createUser("2");
	andThen(function() {
		login("2");
		andThen(function() {
			createCourse();
			andThen(function() {
				createLesson();
				andThen(function() {
					click("#edit-lesson");
					andThen(function() {
						addQuestion("essay", "feedback");
						andThen(function() {
							click("#done");
							andThen(function() {
								fillIn(".essay-space", "response");
								click(".save-response");
								andThen(function() {
									ok(exists(".response-area:contains('feedback')"), "Question shows feedback after response is saved.");
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