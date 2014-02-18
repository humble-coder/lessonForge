App.Answer = DS.Model.extend({
	content: DS.attr('string'),
	question: DS.belongsTo('question'),
	correct: DS.attr('boolean', {defaultValue: false})
});