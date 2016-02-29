var express = require('express');
var router = express.Router();

// Get subscribe page
router.get('/', function(req, res, next) {
	res.render('subscribe', {
		subscribe : 'active'
	});
});

module.exports = router;