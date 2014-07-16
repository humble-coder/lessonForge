module("Student resets password", {
	setup: function() {
		App.reset();
	}
});

test("successfully", function() {
	createUserWithMyInfo(true);
	andThen(function() {
		login();
		andThen(function() {
			click("#logout");
			andThen(function() {
				ok(exists("#password-reset"), "Index view has password-reset link.");
				andThen(function() {
					click("#password-reset");
					andThen(function() {
						fillIn("#username-or-email", "mb");
						andThen(function() {
							click("#reset-password");
							andThen(function() {
								ok(exists("b:contains('Password Reset. Check your inbox at mark.philosophe@gmail.com.')"), "Password-reset view shows password-reset message when username is used.");
								andThen(function() {
									fillIn("#username-or-email", "mark.philosophe@gmail.com");
									andThen(function() {
										click("#reset-password");
										andThen(function() {
											ok(exists("b:contains('Password Reset. Check your inbox at mark.philosophe@gmail.com.')"), "Password-reset view shows password-reset message when email is used.");
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});

test("unsuccessfully", function() {
	visit('/').then(function() {
		click("#password-reset");
		andThen(function() {
			fillIn("#username-or-email", "notAUser@whatever.com");
			andThen(function() {
				click("#reset-password");
				andThen(function() {
					ok(exists("b:contains('Unable to find that user. Please try again.')"), "Password-reset view shows unsuccessful password-reset message when inaccurate info is used.");
				});
			});
		});
	});
});