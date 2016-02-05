var express = require('express');
var router = express.Router();

// Get index page
router.get('/', function(req, res, next) {
	res.render('index', {
		index : 'active'
	});
});

module.exports = router;