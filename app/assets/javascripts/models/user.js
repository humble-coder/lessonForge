App.UserSerializer = DS.ActiveModelSerializer.extend({

	serialize: function(user, options) {
		var json = {};

		user.eachAttribute(function(name) {
			json[serverAttributeName(name)] = user.get(name);
		});

		json['course_ids'] = user.get('courses').mapBy('id');

		return json;
	}
});

function serverAttributeName(attribute) {
	return attribute.underscore();
}

App.User = DS.Model.extend({
	name:  								 DS.attr('string'),
	email: 								 DS.attr('string'),
	username: 						 DS.attr('string'),
	password: 						 DS.attr('string'),
	password_confirmation: DS.attr('string'),
	teacher: 							 DS.attr('boolean', {defaultValue: false}),
	responses:             DS.hasMany('response', {async: true}),
	courses:           		 DS.hasMany('course', {async: true})
});