App.Course = DS.Model.extend({
	name: DS.attr('string'),
	lessons: DS.hasMany('lesson', {async: true}),
	user: DS.belongsTo('user')
});
