App.CourseSerializer = DS.ActiveModelSerializer.extend({

	serialize: function(course, options) {
		var json = {};

		course.eachAttribute(function(name) {
			json[serverAttributeName(name)] = course.get(name);
		});

		json['user_ids'] = course.get('users').mapBy('id');

		return json;
	}
});

function serverAttributeName(attribute) {
	return attribute.underscore();
}

function serverHasManyName(name) {
	return serverAttributeName(name.singularize()) + "_ids";
}

App.Course = DS.Model.extend({
	name: 				DS.attr('string'),
	summary: 			DS.attr('string'),
	lessons: 			DS.hasMany('lesson', {async: true}),
	users: 				DS.hasMany('user', {async: true})
});