App.Course = DS.Model.extend({
	name: DS.attr('string'),
	summary: DS.attr('string'),
	lessons: DS.hasMany('lesson', {async: true}),
	user: DS.belongsTo('user')
});
