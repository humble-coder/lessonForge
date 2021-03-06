App.Lesson = DS.Model.extend({
	name: DS.attr('string'),
	summary: DS.attr('string'),
	course: DS.belongsTo('course'),
	questions: DS.hasMany('question', {async: true}),
	responses: DS.hasMany('response', {async: true})
});