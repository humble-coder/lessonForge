module("Teacher multiple-choice question to lesson", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function(){
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
								ok(exists("#add-question"), "View has add-question button.");
								click("#add-question");
								ok(exists("#question-content"), "View has title-box input.");
								fillIn("#question-content", "A question!");
								ok(exists("#add-answer"));
								click("#add_answer");
								ok(exists(".answer-content"), "View has answer-content input.");
								fillIn(".answer-content", "An answer!");
								click("#save-lesson");
								});
							});
						});
					});
				});
			});
		});
	});
});