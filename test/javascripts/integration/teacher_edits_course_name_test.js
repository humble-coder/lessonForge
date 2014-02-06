module("Teacher edits course name", {
	setup: function() {
		App.reset();
	}

	// teardown: function() {
	// 	Ember.run(App, 'destroy');
	// }
});

test("successfully", function(){
	expect(3);

	visit('/').then(function() {
		click("#courses");
		andThen(function() {
			click("#new-course");
			fillIn("#new-course-name", "Another course");
			click("#save-course");
			andThen(function() {
				click("a:contains('Another course')");
				andThen(function() {
					ok(exists(".edit-course"), "Course has edit-course link.");
					click(".edit-course");
					andThen(function() {
						fillIn("#edit-course-name", "Changed");
						click("#update-course");
						andThen(function() {
							ok(find("a:contains('Changed')").length, "Edited course has new link.");
							ok(find("h1:contains('Changed')").length, "Edited course has new header.");
						});
					});
				});	
			});
		});
	});
});