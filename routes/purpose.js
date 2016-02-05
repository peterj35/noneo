var express = require('express');
var router = express.Router();

// Get purpose page
router.get('/', function(req, res, next) {
	res.render('purpose', {
		purpose : 'active'
	});
});

module.exports = router;