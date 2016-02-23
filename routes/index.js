var express = require('express');
var router = express.Router();

var userModel = D.user;
var reportModel = D.report;
/* GET home page. */

router.get('/', function(req, res, next) {
    res.redirect('/index');
});
router.get('/index', function(req, res, next) {
    if (!req.session.username) {
        res.redirect('/login');
        return;
    }
    reportModel.findOne({
        'username': req.session.username
    }).exec(function(err, docs) {
        res.render('index', {
            report: docs,
            title: '日报系统'
        });
    });
});

router.get('/login', function(req, res, next) {
    res.render('login', {
        title: 'Login'
    });
});


router.get('/logout', function(req, res, next) {
    req.session.username = null;
    res.redirect('/login');
});

router.post('/doLogin', function(req, res, next) {
    userModel.findOne({
        'username': req.body.username
    }).exec(function(err, docs) {
        var user = docs;
        if (user) {
            if (user.password === req.body.password) {
                req.session.username = user.username;
                res.json({
                    msg: 'success',
                    tips: 'login success'
                });
            } else {
                res.json({
                    msg: 'error',
                    errorType: 'wpw',
                    tips: 'login Error'
                });
            }
        } else {
            res.json({
                msg: 'error',
                errorType: 'nouser',
                tips: 'login Error'
            });
        }
    });
});

router.get('/register', function(req, res, next) {
    res.render('register', {
        title: 'Login'
    });
});

router.post('/doRegister', function(req, res, next) {
    var user = req.body;
    userModel.create(user, function(err, docs) {
        res.json({
            'msg': 'success',
            'type': 'Create'
        });
    });
});

router.get('/user', function(req, res, next) {
    if (!req.session.username) {
        res.redirect('/login');
        return;
    }
    userModel.findOne({
        'username': req.session.username
    }).exec(function(err, docs) {
        res.render('userprofile', {
            user: docs,
            title: 'Profile'
        });
    });
});

router.get('/session', function(req, res, next) {

    res.json(req.session);
});


module.exports = router;
