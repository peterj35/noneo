var express = require('express');
var router = express.Router();

// Get chap1 page
router.get('/', function(req, res, next) {
	res.render('1/chapter1', {
		chapters : 'active'
	});
});
router.get('/1', function(req, res, next) {
    res.render('1/1', {
    	user : req.user
    });
});
router.get('/2', function(req, res, next) {
    res.render('1/2', {
    	user : req.user
    });
});
router.get('/3', function(req, res, next) {
    res.render('1/3', {
    	user : req.user
    });
});
router.get('/4', function(req, res, next) {
    res.render('1/4', {
    	user : req.user
    });
});
router.get('/5', function(req, res, next) {
    res.render('1/5', {
        user : req.user
    });
});

module.exports = router;