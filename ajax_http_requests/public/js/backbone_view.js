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
        },
		destroy: function() {
            console.info('Destroy event.');
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
 
/* 
	user.destroy({
		success: function() {
			console.info('Successfully destroyed user.');
		},
		error: function() {
			console.error('Failed to destroy user!');
		}
	});
	 */


    // console.info('Name: ', user.get('name'));
    // console.info('Username: ', user.get('username'));
    // console.info( user.url() );
    // user.save();
		
		
	UserView = Backbone.View.extend({

		el: $("#user"),
		
 		// id: "user",
		// tagName: "li",
		// className: "even",
		// attributes : {
			// style: 'border:medium solid #00ff00;'
		// }, 
		
		model: user,
		
		template: _.template("hello: <%= username %>"),

		// events: {
		// "click .icon":          "open",
		// "click .button.edit":   "openEditDialog",
		// "click .button.delete": "destroy"
		// },

		initialize: function() {
		this.render();
		this.listenTo(this.model, "change", this.render);
		},

		// render: function() {
		// this.el.innerHTML = '<h3>My username is: ' + this.model.get('username') + '</h3>';
		// }
	  
		render: function() {
			this.$el.html(this.template(this.model.attributes));
			return this;
		  },
		  	  
		open: function() {
			            console.log('Opening...');
		  },
		  
		  
		 events: {
			"click": "open"
			// "mouseover": "open",
			// "mouseout": "open"
		  }	 

	});
	
	userView = new UserView();
	
	
});
