App.Response = DS.Model.extend({
	content: DS.attr('string'),
	question: DS.belongsTo('question'),
	user: DS.belongsTo('user')
});