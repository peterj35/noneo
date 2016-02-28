// Shik
var express = require('express');
var cfenv = require('cfenv');
var ejs = require('ejs');

// Create a new express server
var app = express();
var appEnv = cfenv.getAppEnv();

// Set the template engine to use ejs
app.set('view engine', 'ejs');

// Serve files out of ./public
app.use(express.static(__dirname + '/public'));

/* Set up the routes
----------------------------------------*/
var index = require('./routes/index');
var purpose = require('./routes/purpose');
var confucius = require('./routes/confucius');
var introduction = require('./routes/introduction');
var chapter1 = require('./routes/chapter1');
app.use('/', index);
app.use('/purpose', purpose);
app.use('/confucius', confucius);
app.use('/introduction', introduction);
app.use('/1', chapter1);
app.use(express.static('zoho'));

// Start the server
app.listen(appEnv.port, '0.0.0.0', function() {
	console.log("server starting on " + appEnv.url);
});