var express = require('express');
var router = express.Router();

// Get confucius page
router.get('/', function(req, res, next) {
	res.render('confucius', {
		confucius : 'active'
	});
});

module.exports = router;