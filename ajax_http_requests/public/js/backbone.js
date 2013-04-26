$(function() {

    User = Backbone.Model.extend({
        urlRoot: '/users',
        idAttribute: 'username'
    });

    user = new User({
        username: "jobim"
    });

    /* 
    user.fetch({
        success: function() {
            console.info('Successfully fetched user.');
        },
        error: function() {
            console.error('Failed to fetch user!');
        }
    });
 */


    /* 
    user.on("change:bio", function() {
        console.info('Changed user\'s bio.');
    });
 */

    /* 
    user.on("change", function() {
        console.info('Changed user.');
    });
 */

    user.on({
        change: function() {
            console.info('Change event.');
        },
        request: function() {
            console.info('Request event.');
        },
        sync: function() {
            console.info('Sync event.');
        }
    });

    /* 
    user.save({
        success: function() {
            console.info('Successfully saved user.');
        },
        error: function() {
            console.error('Failed to save user!');
        }
    });
 */


/* 
	user.save({
		username: 'lucas',
		bio: 'XXX'
	}, {
		success: function() {
			console.info('Successfully saved user.');
		},
		error: function() {
			console.error('Failed to save user!');
		},
		wait: true
	});
 */


    // console.info('Name: ', user.get('name'));
    // console.info('Username: ', user.get('username'));
    // console.info( user.url() );
    // user.save();
});
