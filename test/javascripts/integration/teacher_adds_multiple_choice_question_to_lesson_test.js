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
// 								click("#save-lesson");
// 								andThen(function() {
// 									click("#view-lessons");
// 									andThen(function() {
// 										click("a:contains('Lesson with a Question')")
										
// 									})
// 								});
// 							});
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
// });