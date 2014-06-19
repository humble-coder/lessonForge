module("Guest searches for course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUser("16");
	andThen(function() {
		login("16");
		andThen(function() {
			createCourse();
			andThen(function() {
				click("#logout");
				andThen(function() {
					click("#courses");
					andThen(function() {
						fillIn("#course-search", "Lesson");
						andThen(function() {
							keyEvent("#course-search", "keypress", 13);
							andThen(function() {
								ok(exists("a:contains('Course with a Lesson')"), "Course name displayed after search.");
							});
            });
          });
        });
      });
    });
  });
});