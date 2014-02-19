// module("Teacher multiple-choice question to lesson", {
// 	setup: function() {
// 		App.reset();
// 	}
// });

// test("successfully", function(){
// 	visit('/').then(function() {
// 		click("#courses");
// 		andThen(function() {
// 			click("#new-course");
// 			fillIn("#new-course-name", "Course Whose Lesson Will Have an MC Question");
// 			andThen(function() {
// 				click("#save-course");
// 				andThen(function() {
// 					click("a:contains('Course Whose Lesson Will Have an MC Question')");
// 					andThen(function() {
// 						click("#view-lessons");
// 						andThen(function() {
// 							click("#new-lesson");
// 							andThen(function() {
// 								fillIn("#new-lesson-name", "Lesson with a Question");
// 								ok(exists("#add-question"), "View has add-question button.");
// 								click("#add-question");
// 								ok(exists("#question-form"), "Question form exists.")
// 								ok(exists("#question-title"), "Question title-box input exists.")
// 								click("#save-lesson");
// 								});
// 							});
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
// });