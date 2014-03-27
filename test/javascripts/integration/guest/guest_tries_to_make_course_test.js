module("Guest tries to make course", {
	setup: function() {
		App.reset();
	}
});

test("unsuccessfully", function() {
	
	visit('/').then(function() {
		click("#courses");
		ok(!exists('#new-course'), "New course button not present to guest user.");
		visit('/courses/new').then(function() {
			ok(!exists('#save-course'), "Save course button not present to guest at courses/new.");
			ok(exists('#username-or-email'), "Username-or-email field displayed to guest.");
			ok(exists('#login-password'), "Login-password field displayed to guest.");
		});
	});
});