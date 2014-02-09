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

test("without saving the changes (cancelling)", function() {

	visit('/').then(function() {
		click("#courses");
		andThen(function() {
			click("#new-course");
			fillIn("#new-course-name", "Will not Change");
			click("#save-course");
			andThen(function() {
				click("a:contains('Will not Change')");
				andThen(function() {
					click(".edit-course");
					fillIn("#edit-course-name", "Changed");
					click("#cancel-update");
					andThen(function() {
						ok(find("a:contains('Will not Change')").length, "Course has same name.");
					})
				})
			})
		})
	})
});