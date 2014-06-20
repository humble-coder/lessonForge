module("Student registers for course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUser("17");
	andThen(function() {
		login("17");
		andThen(function() {
			createCourse();
			andThen(function() {
				click("#logout");
				andThen(function() {
					createUser("18", teacher = false);
					andThen(function() {
						login("18");
						andThen(function() {
						  click("#courses");
						  andThen(function() {
						  	click("a:contains('Course with a Lesson')");
						  	andThen(function() {
						  		ok(exists("#register-for-course"), "Course view has register-for-course button.");
						  		andThen(function() {
						  			click("#register-for-course");
										andThen(function() {
						  				ok(exists("#view-lessons"), "View lessons button is displayed.");
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