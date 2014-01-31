module("Teacher creates course", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function(){
	expect(3);

	visit('/').then(function() {
		ok(exists("Create Course"), "The create-course button was found.");
		return click("Create Course");
	}).then(function() {
		fillIn("Course Name", "A new course");
		equal(find("Course Name").val(), "A new course", "Found Course Name field");
		return click("Save Course");
	}).then(function() {
		ok(exists("h1:contains('A new course')"), "Name of course is displayed.");
	})
});