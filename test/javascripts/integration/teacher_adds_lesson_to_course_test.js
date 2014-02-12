module("Teacher adds lesson to course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function(){

	visit('/').then(function() {
		click("#courses");
		andThen(function() {
			click("#new-course");
			fillIn("#new-course-name", "Course Needing a Lesson");
			andThen(function() {
				click("#save-course");
				andThen(function() {
					click("a:contains('Course Needing a Lesson')");
					andThen(function() {
						ok(exists("#new-lesson"), "Course has new-lesson button.")
						click("#new-lesson");
						fillIn("#new-lesson-name", "New Lesson");
						equal(find("new-lesson-name").val(), "New Lesson", "New-lesson-name field has string 'New Lesson'");
						click("#save-lesson");
						andThen(function() {
							ok(exists("a:contains('New Lesson')"), "Course has new-lesson link.");
							ok(find("h2:contains('New Lesson')"), "Lesson has header containing 'New Lesson.'");
						});
					});
				});
			});
		});
	});
});