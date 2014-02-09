module("Teacher deletes course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function(){
	expect(2);

	visit('/').then(function() {
		click("#courses");
		andThen(function() {
			click("#new-course");
			fillIn("#new-course-name", "Course to Delete");
			andThen(function() {
				click("#save-course");
				andThen(function() {
					click("a:contains('Course to Delete')");
					andThen(function() {
						ok(exists("#delete-course"), "Course has delete-course link.");
						click("#delete-course");
						andThen(function() {
							ok(!exists("a:contains('Course to Delete')"), "Course has no link.");
						});
					});
				});	
			});
		});
	});
});