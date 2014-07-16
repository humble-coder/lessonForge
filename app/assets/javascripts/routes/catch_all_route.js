App.CatchAllRoute = Ember.Route.extend({ 
	redirect: function() {
  	this.transitionTo('index'); 
  }
});