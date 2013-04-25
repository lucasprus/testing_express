$(function() {

	var User = Backbone.Model.extend({
		urlRoot : '/users',
		idAttribute : 'username'
	});

	user = new User({
	  username: "jobim"
	});
	user.fetch();
	// console.info('Name: ', user.get('name'));
	// console.info('Username: ', user.get('username'));
	// console.info( user.url() );
	// user.save();
});
