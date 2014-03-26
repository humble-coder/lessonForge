module("Teacher registers and logs in", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {

	visit('/').then(function() {
		click("#new-user");
		andThen(function() {
			ok(exists("#full-name"), "View has full-name field displayed.");
			fillIn("#full-name", "Bob8");
			ok(exists("#email-address"), "View has email-address field displayed.");
			fillIn("#email-address", "bob8@something.com");
			ok(exists("#username"), "View has username field displayed.");
			fillIn("#username", "bob8");
			ok(exists("#password"), "View has password field displayed.");
			fillIn("#password", "something");
			ok(exists("#password-confirmation"), "View has password-confirmation field displayed.");
			fillIn("#password-confirmation", "something");
			ok(exists("#new-teacher"), "View has new-teacher checkbox displayed.");
			click("#new-teacher");
			andThen(function() {
				ok(exists("#create-user"), "View has create-user button displayed.");
				click("#create-user");
				andThen(function() {
					ok(exists("#username-or-email"), "Login view has username-or-email field displayed.");
					fillIn("#username-or-email", "bob8@something.com");
					ok(exists("#login-password"), "View has password field displayed.");
					fillIn("#login-password", "something");
					click("#new-session");
					andThen(function() {
						ok(exists("#logout"), "View has logout link displayed - login successful.");
						click("#logout");
					});
				});
			});
		});
	});
});

test("without filling in username-or-email field (unsuccessfully)", function() {
	visit('/').then(function() {
		click("#login");
		andThen(function() {
			fillIn("#login-password", "something");
			ok(!exists("#new-session"), "Login button not displayed when username-email field empty.");
		});
	});
});

test("without filling in password field (unsuccessfully)", function() {
	visit('/').then(function() {
		click("#login");
		andThen(function() {
			fillIn("#username-or-email", "bob8@something.com");
			ok(!exists("new-session"), "Login buttno not displayed when password field empty.");
		});
	});
});