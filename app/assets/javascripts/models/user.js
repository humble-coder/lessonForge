App.User = DS.Model.extend({
	name:  								 DS.attr('string'),
	email: 								 DS.attr('string'),
	username: 						 DS.attr('string'),
	password: 						 DS.attr('string'),
	password_confirmation: DS.attr('string'),
	teacher: 							 DS.attr('boolean', {defaultValue: false})
});