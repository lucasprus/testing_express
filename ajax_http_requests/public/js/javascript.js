$(function() {

    var user = {
        username: 'lucas',
        name: 'Lucas Prus',
        bio: 'Lorem Ipsum',
        password: 'secret'
    };

    var deleteUser = {
        '_method': 'DELETE'
    };

    var putUser = {
        username: 'lucas',
        name: 'Lucas Prus',
        bio: 'Lorem Ipsum',
        password: 'stronger secret',
        '_method': 'PUT'
    };

    $('button.get').click(function() {
        $.get('http://localhost:3000/users/lucas', function(data, status) {
            console.info('Status: ' + status);
            console.log(data);
        }, 'json');
    });


    $('button.post').click(function() {
        $.post('http://localhost:3000/users', user, function(data, status) {
            console.info('Status: ' + status);
            console.log(data);
        });
    });

    $('button.delete').click(function() {
        $.post('http://localhost:3000/users/lucas', deleteUser, function(data, status) {
            console.info('Status: ' + status);
            console.log(data);
        });
    });

    $('button.put').click(function() {
        $.post('http://localhost:3000/users/lucas', putUser, function(data, status) {
            console.info('Status: ' + status);
            console.log(data);
        });
    });

});
