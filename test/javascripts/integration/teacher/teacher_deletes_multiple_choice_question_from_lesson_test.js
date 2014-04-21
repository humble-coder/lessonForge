module("Teacher deletes multiple-choice question from lesson", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {
	createUser("9");
	andThen(function() {
		login("9");
		andThen(function() {
			createCourse();
			andThen(function() {
				createLesson();
				andThen(function() {
					ok(exists("#edit-lesson"), "Lesson view has edit-lesson button.");
					click("#edit-lesson");
					andThen(function() {
						addQuestion("multiple-choice");
						andThen(function() {
							ok(exists(".remove-question"), "Lesson-edit view has remove-question button.");
							click(".remove-question");
							click("#done");
							andThen(function() {
								ok(!exists("span:contains('New Question')"), "Lesson index template has no question displayed.");
								click("#logout");
							});
						});
					});
        });
      });
    });
  });
});