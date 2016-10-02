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
var blog = require('./routes/blog');
var subscribe = require('./routes/subscribe');
app.use('/', index);
app.use('/purpose', purpose);
app.use('/confucius', confucius);
app.use('/introduction', introduction);
app.use('/1', chapter1);
app.use('/blog', blog);
app.use('/subscribe', subscribe);

/* 404 Page
-------------------------------------------------------- */
app.use(function(req, res, next) {
	res.status(404);

	// respond with html page
	if (req.accepts('html')) {
		res.render('subscribe', {
			subscribe : 'active',
			title : "<div class='page-header'><h2>Page Not Available</h2></div>",
			message : "<div class='well'>The page, chapter, or passage you are looking for doesn't exist... yet! <br><br> To be notified when it does become available, you should subscribe!</div>",
		});

		return;
	}

	// respond with json
	if (req.accepts('json')) {
		res.send({
			error: 'Not found'
		});

		return;
	}

	// default to plain-text. send()
	res.type('txt').send('Not found');
});

// Start the server
app.listen(6002, '0.0.0.0', function() {
	console.log("server starting on 6002");
});
