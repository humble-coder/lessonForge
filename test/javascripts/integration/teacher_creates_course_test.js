module("Teacher creates course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function(){
	expect(4);

	visit('/').then(function() {
		ok(exists("#courses"), "View has courses link.");
		click("#courses");
		andThen(function() {
			ok(exists("#new-course"), "View has new-course link.");
			click("#new-course");
			andThen(function() {
				fillIn("#new-course-name", "A new course");
				equal(find("#new-course-name").val(), "A new course", "Name field has the string 'A new course.' in it");
				click("#save-course");
				andThen(function() {
					ok(exists("h2:contains('A new course')", "New course added."));
				});
			});
		});
	});
});

test("without a name (unsuccessfully)", function(){

	visit('/').then(function() {
		click("#courses");
		andThen(function() {
			click("#new-course");
			andThen(function() {
				ok(!exists("#save-course"), "Save action has no button.");
			});
		});
	});
});