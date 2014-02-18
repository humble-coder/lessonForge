App.Question = DS.Model.extend({
	content: DS.attr('string'),
	lesson: DS.belongsTo('lesson'),
	answers: DS.hasMany('answer', {async: true})
});

App.QuestionSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    answers: {embedded: 'always'}
  }
});