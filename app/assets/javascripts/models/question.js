App.Question = DS.Model.extend({
	content: DS.attr('string'),
	lesson: DS.belongsTo('lesson'),
	answers: DS.hasMany('answer', {async: true}),
	responses: DS.hasMany('response', {async: true}),
	category: DS.attr('string')
});