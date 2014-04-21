module("Teacher edits question and answer content", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {
	createUser("12");
	andThen(function() {
		login("12");
		andThen(function() {
			createCourse();
			andThen(function() {
				createLesson();
				andThen(function() {
					click("#edit-lesson");
					andThen(function() {
						addQuestion();
						andThen(function() {
							ok(exists(".edit-question"), "Lesson view has question-edit button");
							click(".edit-question");
							fillIn(".question-content", "Updated Question");
							click(".save-question");
							addAnswer();
							andThen(function() {
								ok(exists(".edit-answer"), "Lesson view has answer-edit button.");
								click(".edit-answer");
								fillIn(".answer-content", "Updated Answer");
								click(".save-answer");
								click("#done");
								andThen(function() {
									ok(exists("span:contains('Updated Question')"), "Lesson view has edited question displayed.");
									ok(exists("div:contains('Updated Answer')"), "Lesson view has edited answer displayed.");
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

test("with blank content for both question and answer (unsuccessfully)", function() {
	visit('/').then(function() {
		click("#login");
		andThen(function() {
			login("12");
			andThen(function() {
				click("a:contains('Course with a Lesson')");
				andThen(function() {
					click("#view-lessons");
					andThen(function() {
						click("a:contains('New Lesson')");
						andThen(function() {
							click("#edit-lesson");
							andThen(function() {
								click(".edit-question");
								andThen(function() {
									fillIn(".question-content", "");
									ok(!exists(".save-question"), "Lesson view has blurred save-question button when content is blank.");
									andThen(function() {
										click(".edit-answer");
										fillIn(".answer-content", "");
										andThen(function() {
											ok(!exists(".save-answer"), "Lesson view has blurred save-answer button when content is blank.");
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