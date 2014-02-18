App.Lesson = DS.Model.extend({
	name: DS.attr('string'),
	course: DS.belongsTo('course'),
	questions: DS.hasMany('question', {async: true})
});

App.LessonSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    questions: {embedded: 'always'}
  }
});