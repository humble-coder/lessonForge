module("Teacher logs in", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			fillIn("#full-name", "Bob");
			fillIn("#email-address", "bob@something.com");
			fillIn("#username", "bob");
			fillIn("#password", "something");
			fillIn("#password-confirmation", "something");
			click("#new-teacher");
			click("#create-user");
			andThen(function() {
				click("a:contains('Logout')");
				andThen(function() {
					ok(exists("#login"), "View has login button displayed.");
					click("#login");
					andThen(function() {
						ok(exists("#username-or-email"), "View has username-or-email field displayed.");
						fillIn("#username-or-email", "bob@something.com");
						ok(exists("#login-password"), "View has password field displayed.");
						fillIn("#login-password", "something");
						ok(exists("#new-session"), "View has login button displayed.");
						click("#new-session");
						andThen(function() {
							ok(exists("a:contains('Logout')"), "View has logout link displayed once again; login successful.");
							click("a:contains('Logout')");
						});
					});
				});
			});
		});
	});
});