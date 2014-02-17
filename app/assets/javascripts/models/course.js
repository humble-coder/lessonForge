App.Course = DS.Model.extend({
	name: DS.attr('string'),
	lessons: DS.hasMany('lesson', {async: true})
});

App.CourseSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    lessons: {embedded: 'always'}
  }
});

