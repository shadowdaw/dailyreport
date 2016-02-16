var express = require('express');
var router = express.Router();
var userModel = D.user;


router.get('/', function(req, res, next) {
    userModel.find({}).exec(function(err, docs) {
        res.render('users/users', {
            title: 'Users',
            users: docs
        });
    });
});
module.exports = router;
