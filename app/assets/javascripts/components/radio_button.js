App.RadioButtonComponent = Ember.Component.extend({
	tagName: "input",
	type: "radio",
	attributeBindings: ["name", "type", "value"],
	click: function() {
		var response = this.get("value");
		var content = response.get('content');
		if(response.get("correct")) {
			this.set("selection", content + " - correct!");
		}
		else {
			this.set("selection", response + " - incorrect!");
		}
		// if(this.get("value")) {
		// 	this.set("selection", "Correct!");
		// }
		// else {
		// 	this.set("selection", "Incorrect!");
		// }
	}
});