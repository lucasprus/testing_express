var express = require('express');
var app = express();
var users = require('./data/users');

/* app.all('*', function(req, res, next){
  console.log('Request received');
  next();
}); */

// app.use(express.logger());

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(express.static(__dirname + '/public'));

app.use(express.bodyParser());

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/hello', function(req, res, next){
  // res.send('Hello');
  req.hello = 'hello';
  next();
});

app.get('/hello', function(req, res){
  // res.send('Hello2');
  res.send(req.hello);
});

app.get('/world', function(req, res){
  res.send('World');
});

app.get('/world', function(req, res){
  res.send('World');
});


app.get('/user/:name', function(req, res){
  // res.json({user: req.params.name});
	if( users[req.params.name] )
		res.json(users[req.params.name]);
	else 
		res.json(404, {error: 'User not found!'});
});

app.post('/user', function(req, res){
	if (users[req.body.username]) {
		res.json(409, {error: 'conflict!'});
	} else {
		users[req.body.username] = req.body;
		res.json(200, {success: 'New user inserted'});
	}
});



// app.set('title', 'My Site');
// console.log(app.get('title'));

app.listen(3000);
console.log('Listening on port 3000');