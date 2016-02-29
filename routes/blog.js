var express = require('express');
var router = express.Router();

// Get blog page
router.get('/', function(req, res, next) {
	res.render('blog', {
		blog : 'active'
	});
});

module.exports = router;