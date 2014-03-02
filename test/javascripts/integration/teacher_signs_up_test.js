module("Teacher signs up", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Teacher");
			fillIn("#email-address", "teacher@example.com");
			fillIn("#username", "Teach");
			fillIn("#password", "password");
			fillIn("#password_confirmation", "password");
			click("#new-teacher");
			click("create-user");
			ok(exists("a:contains('teacher@example.com')"), "View has teacher email displayed.");
			ok(exists("a:contains('Logout')"), "View has logout link displayed.");
		});
	});
});