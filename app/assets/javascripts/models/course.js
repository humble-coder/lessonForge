App.Course = DS.Model.extend({
	name: DS.attr('string'),
	lessons: DS.hasMany('lesson', {async: true})
});

// App.CourseSerializer = DS.RESTSerializer.extend({
// 	extractSingle: function(store, type, payload, id, requestType) {
// 		var lessons = payload.course.lessons,
// 		    lessonIds = lessons.mapProperty('id');

// 		payload.lessons = lessons;
// 		payload.course.lessons = lessonIds;

// 		return this._super.apply(this, arguments);
// 	}
// });