var express = require('express');
var router = express.Router();

// Get chap1 page
router.get('/', function(req, res, next) {
	res.render('1/chapter1', {
		chapters : 'active',
        c0 : 'active'
	});
});
router.get('/1', function(req, res, next) {
    res.render('1/1', {
		chapters : 'active',
    	c1 : 'active'
    });
});
router.get('/2', function(req, res, next) {
    res.render('1/2', {
		chapters : 'active',
    	c2 : 'active'
    });
});
router.get('/3', function(req, res, next) {
    res.render('1/3', {
		chapters : 'active',
    	c3 : 'active'
    });
});
router.get('/4', function(req, res, next) {
    res.render('1/4', {
		chapters : 'active',
    	c4 : 'active'
    });
});
router.get('/5', function(req, res, next) {
    res.render('1/5', {
		chapters : 'active',
        c5 : 'active'
    });
});
router.get('/6', function(req, res, next) {
    res.render('1/6', {
		chapters : 'active',
        c6 : 'active'
    });
});
router.get('/7', function(req, res, next) {
    res.render('1/7', {
		chapters : 'active',
        c7 : 'active'
    });
});
router.get('/8', function(req, res, next) {
    res.render('1/8', {
		chapters : 'active',
        c8 : 'active'
    });
});
router.get('/9', function(req, res, next) {
    res.render('1/9', {
		chapters : 'active',
        c9 : 'active'
    });
});
router.get('/10', function(req, res, next) {
    res.render('1/10', {
		chapters : 'active',
        c10 : 'active'
    });
});
router.get('/11', function(req, res, next) {
    res.render('1/11', {
		chapters : 'active',
        c11 : 'active'
    });
});
router.get('/12', function(req, res, next) {
    res.render('1/12', {
		chapters : 'active',
        c12 : 'active'
    });
});
router.get('/13', function(req, res, next) {
    res.render('1/13', {
		chapters : 'active',
        c13 : 'active'
    });
});
router.get('/14', function(req, res, next) {
    res.render('1/14', {
		chapters : 'active',
        c14 : 'active'
    });
});
router.get('/15', function(req, res, next) {
    res.render('1/15', {
		chapters : 'active',
        c15 : 'active'
    });
});
router.get('/16', function(req, res, next) {
    res.render('1/16', {
		chapters : 'active',
        c16 : 'active'
    });
});

module.exports = router;