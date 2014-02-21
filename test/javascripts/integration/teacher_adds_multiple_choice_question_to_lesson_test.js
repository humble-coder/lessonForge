module("Teacher multiple-choice question to lesson", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	visit('/').then(function() {
		click("#courses");
		andThen(function() {
			click("#new-course");
			fillIn("#new-course-name", "Course Whose Lesson Will Have an MC Question");
			andThen(function() {
				click("#save-course");
				andThen(function() {
					click("#view-lessons");
					andThen(function() {
						click("#new-lesson");
						andThen(function() {
							fillIn("#new-lesson-name", "Lesson with a Question");
							click("#save-lesson");
							andThen(function() {
								ok(exists("#edit-lesson"), "Lesson view has edit-lesson button.");
								click("#edit-lesson");
								andThen(function() {
									ok(exists("#new-question"), "Lesson-edit view has new-question button.");
									click("#new-question");
									ok(exists(".question-content"), "Lesson-edit view has new-question input box.");
									fillIn(".question-content", "New Question");
									ok(exists(".save-question"), "Lesson-edit view has save-question button.");
									click(".save-question")
									click("#done");
									andThen(function() {
										ok(exists("span:contains('New Question')"), "Question content is displayed.");
									})
								})
							})
						});
					});
				});
			});
		});
	});
});