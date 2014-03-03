module("Teacher signs up", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Mark");
			fillIn("#email-address", "mark.philosophe@gmail.com");
			fillIn("#username", "mb");
			fillIn("#password", "password");
			fillIn("#password-confirmation", "password");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				ok(exists("a:contains('Logout')"), "View has logout link displayed.");
				click("a:contains('Logout')");
			});
		});
	});
});