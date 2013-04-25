var express = require('express');
var app = express();
var users = require('../data/users');

/* app.all('*', function(req, res, next){
  console.log('Request received');
  next();
}); */

// app.use(express.logger());


app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

/* app.del('*', function(req, res) {
    res.send('Hello DELETE');
});

app.put('*', function(req, res) {
    res.send('Hello PUT');
}); */


app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/hello', function(req, res, next) {
    // res.send('Hello');
    req.hello = 'hello';
    next();
});

app.get('/hello', function(req, res) {
    // res.send('Hello2');
    res.send(req.hello);
});

app.get('/world', function(req, res) {
    res.send('World');
});

app.get('/world', function(req, res) {
    res.send('World');
});


app.get('/users/:name', function(req, res) {
    if (users[req.params.name])
        res.json(users[req.params.name]);
    else
        res.json(404, {
            error: 'User not found!'
        });
});

app.post('/users', function(req, res) {
    if (users[req.body.username]) {
        res.json(409, {
            error: 'Conflict!'
        });
    } else {
        users[req.body.username] = req.body;
        res.json(201, {
            success: 'New user inserted'
        });
    }
});

app.del('/users/:name', function(req, res) {
    if (users[req.params.name]) {
        delete users[req.params.name]
        res.json(200, {
            success: 'User deleted'
        });
    } else
        res.json(404, {
            error: 'User not found!'
        });
});

app.put('/users/:name', function(req, res) {

    if (users[req.params.name]) {
        users[req.params.name] = req.body;
        res.json(200, {
            success: 'User updated'
        });
    } else
        res.json(404, {
            error: 'User not found!'
        });

});


// app.set('title', 'My Site');
// console.log(app.get('title'));

app.listen(3000);
console.log('Listening on port 3000');
