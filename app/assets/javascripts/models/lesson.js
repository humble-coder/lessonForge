App.Lesson = DS.Model.extend({
	name: DS.attr('string'),
	course: DS.belongsTo('course'),
	questions: DS.hasMany('question', {async: true})
});