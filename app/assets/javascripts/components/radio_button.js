App.RadioButtonComponent = Ember.Component.extend({
	tagName: "input",
	type: "radio",
	attributeBindings: ["name", "type", "value"],
	click: function() {
		if(this.get("value")) {
			this.set("selection", "Correct!");
		}
		else {
			this.set("selection", "Incorrect!");
		}
	}
});