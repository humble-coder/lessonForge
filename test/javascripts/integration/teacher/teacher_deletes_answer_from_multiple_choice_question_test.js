module("Teacher deletes answer from multiple-choice question", {
	setup: function() {
		App.reset();
	}
});


test("successfully", function() {
	createUser("6");
	andThen(function() {
		login("6");
		andThen(function() {
			createCourse();
			andThen(function() {
				createLesson();
				andThen(function() {
					click("#edit-lesson");
					andThen(function() {
						addQuestion("multiple-choice");
						andThen(function() {
							addAnswer(true);
							andThen(function() {
								ok(exists(".remove-answer"), "Remove-answer button is displayed.");
								click(".remove-answer");
								click("#done");
								andThen(function() {
									ok(exists("span:contains('New Question')"), "Lesson index template has question displayed.");
									ok(!exists("div:contains('New Answer')"), "Lesson index template has no answers displayed.");
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