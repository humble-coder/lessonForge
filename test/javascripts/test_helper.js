//= require application
//= require_tree .
//= require_self

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { position: absolute; background: white; bottom: 0; right: 0; width: 640px; height: 384px; overflow: auto; z-index: 9999; border: 1px solid #ccc; } #ember-testing { zoom: 50%; }</style>');
 
App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();
 
function exists(selector) {
  return !!find(selector).length;
}

function createUser(id, student) {
	visit('/').then(function() {
		click("#new-user");
		fillIn("#full-name", "Bob" + id);
		fillIn("#email-address", "bob" + id + "@something.com");
		fillIn("#username", "bob" + id);
		fillIn("#password", "something");
		fillIn("#password-confirmation", "something");
		if (!student) {
			click("#new-teacher");
		}
		click("#create-user");
	});
}

function createUserWithMyInfo(student) {
	visit('/').then(function() {
		click("#new-user");
		fillIn("#full-name", "Mark");
		fillIn("#email-address", "mark.philosophe@gmail.com");
		fillIn("#username", "mb");
		fillIn("#password", "something");
		fillIn("#password-confirmation", "something");
		if (!student) {
			click("#new-teacher");
		}
		click("#create-user");
	});
}

function login(id) {
	if (id) {
		fillIn("#username-or-email", "bob" + id);
	}
	else {
		fillIn("#username-or-email", "mb");
	}
	fillIn("#login-password", "something");
	click("#new-session");
}

function createCourse() {
	click("#new-course");
	fillIn("#new-course-name", "Course with a Lesson");
	click("#save-course");
}

function createLesson() {
	click("#view-lessons");
	click("#new-lesson");
	fillIn("#new-lesson-name", "New Lesson");
	click("#save-lesson");
}

function addQuestion(type, feedback) {
	feedback = feedback || "";
	click("#new-question");
	fillIn(".question-content", "New Question");
	fillIn(".question-category", type);
	fillIn(".question-feedback", feedback)
	click(".save-question");
}

function addAnswer(correct) {
	click(".add-answer")
	fillIn(".answer-content", "New Answer");
	if(correct) {
		click(".mark-correct");
	}
	click(".save-answer");
}