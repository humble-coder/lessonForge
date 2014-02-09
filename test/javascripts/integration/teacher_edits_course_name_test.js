module("Teacher edits course name", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function(){
	expect(3);

	visit('/').then(function() {
		click("#courses");
		andThen(function() {
			click("#new-course");
			fillIn("#new-course-name", "Course to Edit");
			click("#save-course");
			andThen(function() {
				click("a:contains('Course to Edit')");
				andThen(function() {
					ok(exists(".edit-course"), "Course has edit-course link.");
					click(".edit-course");
					andThen(function() {
						fillIn("#edit-course-name", "Edited Course");
						click("#update-course");
						andThen(function() {
							ok(find("a:contains('Edited Course')").length, "Edited course has new link.");
							ok(find("h1:contains('Edited Course')").length, "Edited course has new header.");
						});
					});
				});	
			});
		});
	});
});

test("but then cancels")