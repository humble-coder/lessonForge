module("Teacher adds essay question to lesson", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {
	createUser("1");
	andThen(function() {
		login("1");
		andThen(function() {
			createCourse();
			andThen(function() {
				createLesson();
				andThen(function() {
					click("#edit-lesson");
					andThen(function() {
						addQuestion("essay");
						andThen(function() {
							click("#done");
							andThen(function() {
								ok(exists("span:contains('New Question')"), "Lesson view has question displayed.");
								ok(exists(".essay-space"), "Lesson view has essay question's text area displayed.");
								andThen(function() {
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