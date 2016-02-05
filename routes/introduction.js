var express = require('express');
var router = express.Router();

// Get introduction page
router.get('/', function(req, res, next) {
	res.render('introduction', {
		introduction : 'active'
	});
});

module.exports = router;