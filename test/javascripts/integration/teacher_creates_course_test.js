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
					ok(exists(".course-link"), "New course added.");
					ok(find("a:contains('A new course')").length, "View has a link to newly created course.");
				});
			});
		});
	});
});

// test("without a name", function(){

// 	visit('/').then(function() {
// 		click("#courses");
// 		andThen(function() {
// 			click("#new-course");
// 			andThen(function() {
// 				click("save-course");
// 				andThen(function() {
// 					ok(exists("#name-error"), "View has
// 				})
// 			})
// 		})
// 	})
// })