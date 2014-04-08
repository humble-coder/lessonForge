App.Response = DS.Model.extend({
	content: DS.attr('string'),
	user: DS.belongsTo('user'),
	lesson: DS.belongsTo('lesson')
});