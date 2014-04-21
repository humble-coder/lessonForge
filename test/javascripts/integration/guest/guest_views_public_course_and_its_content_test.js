module("Guest views public course and its content", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUser("15");
	andThen(function() {
		login("15");
		andThen(function() {
			createCourse();
			andThen(function() {
				createLesson();
				andThen(function() {
					click("#edit-lesson");
					andThen(function() {
						addQuestion("multiple-choice");
						andThen(function() {
							addAnswer();
							click("#done");
							andThen(function() {
								click("#logout");
								andThen(function() {
							  	click("#courses");
							  	andThen(function() {
							  		ok(exists("a:contains('Course with a Lesson')"), "Guest user sees public course in list of courses.");
							  		click("a:contains('Course with a Lesson')");
							  		andThen(function() {
							  			ok(exists("h2:contains('Course with a Lesson')"), "Guest user sees course after clicking on it.");
							  			click("#view-lessons");
							  			andThen(function() {
							  				ok(exists("a:contains('New Lesson')"), "Guest user sees link to course's lesson.");
							  				click("a:contains('New Lesson')");
							  				andThen(function() {
							  					ok(exists("h3:contains('New Lesson')"), "Guest user sees lesson.");
							  					ok(exists("span:contains('New Question')"), "Guest user sees question.");
													ok(exists("div:contains('New Answer')"), "Guest user sees question's answer.");
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
});