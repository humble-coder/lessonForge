module("Teacher creates course", {
	setup: function() {
		App.reset();
	}

	// teardown: function() {
	// 	Ember.run(App, 'destroy');
	// }
});

test("successfully", function(){
	expect(5);

	visit('/').then(function() {
		ok(exists("#courses"), "The courses link was found");
		click("#courses");
		andThen(function() {
			ok(exists("#new-course"), "The new-course link was found.");
			click("#new-course");
			andThen(function() {
				fillIn("#new-course-name", "A new course");
				equal(find("#new-course-name").val(), "A new course", "Found and filled Course name field.");
				click("#save-course");
				andThen(function() {
					ok(exists(".course-link"), "New course added.");
					ok(find("a:contains('A new course')").length, "A link to the course should display.");
				});
			});
		});
	});
});

// test("without a name", function(){

// 	visit('/').then(function() {
// 		ok(exists)
// 	})
// })