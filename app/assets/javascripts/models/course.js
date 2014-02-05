App.Course = DS.Model.extend({
	name: DS.attr('string'),
	validations: {
		name: {
			presence: true
		}
	}
});