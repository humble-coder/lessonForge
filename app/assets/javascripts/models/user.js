App.UserSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
		courses: {serialize: 'ids', deserialize: 'records'}
	},

	serialize: function(user, options) {
		var json = {};

		user.eachAttribute(function(name) {
			json[serverAttributeName(name)] = user.get(name);
		});

		// user.eachRelationship(function(name, relationship) {
		// 	if (relationship.kind === 'hasMany' && name.toString() === 'courses') {
		// 		json[serverHasManyName(name)] = user.get(name).mapBy('id');
		// 	}
		// });
		json['course_ids'] = user.get('courses').mapBy('id');

		return json;
	}
});

function serverAttributeName(attribute) {
	return attribute.underscore();
}

// function serverHasManyName(name) {
// 	return serverAttributeName(name.singularize()) + "_ids";
// }

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