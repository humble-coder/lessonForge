App.CoursesIndexController = Ember.ArrayController.extend({

	search: '',

	nameFilter: null,

	actions: {
		query: function() {
			var query = this.get('search');
			this.set('nameFilter', query);
		}
	},

	arrangedContent: function() {
		var search = this.get('search');
		if (!search) { return this.get('content') }

		return this.get('content').filter(function(courses) {
			return courses.get('name').indexOf(search) != - 1;
		})
	}.property('content', 'nameFilter')
});