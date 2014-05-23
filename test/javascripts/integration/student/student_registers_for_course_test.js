// module("Student registers for course", {
// 	setup: function() {
// 		App.reset();
// 	}
// });

// test("successfully", function() {
// 	createUser("16");
// 	andThen(function() {
// 		login("16");
// 		andThen(function() {
// 			createCourse();
// 			andThen(function() {
// 				click("#logout");
// 				andThen(function() {
// 					createUser("17", teacher = false);
// 					andThen(function(), {
// 						login("17");
// 						andThen(function() {
// 						  click("#courses");
// 						  andThen(function() {
// 						  	click("a:contains('Course with a Lesson')");
// 						  	andThen(function() {
// 						  		ok(exists("#register-for-course"), "Course view has register-for-course button.");
// 						  		click("#register-for-course");
// 						  		andThen(function() {
// 						  			ok(exists("p:contains('You have registered for this course!')"), "Course registration is displayed.");
// 						  		});
// 						  	});
// 						  });
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
// });