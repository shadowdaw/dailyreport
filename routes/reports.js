var express = require('express');
var router = express.Router();
var reportModel = D.report;


router.get('/newreport', function(req, res, next) {
    if(!req.session.username){
        res.redirect('/login');
        return;
    }
    res.render('reports/newreport', {
        title: 'New Report'
    });
});

router.post('/newreport', function(req, res, next) {
    var report = req.body;
    report.username=req.session.username;
    reportModel.create(report, function(err, docs) {
        res.json({
            'msg': 'success',
            'type': 'Create'
        });
    });
});

router.get('/', function(req, res, next) {
    if(!req.session.username){
        res.redirect('/login');
        return;
    }
    reportModel.find({
        'username': req.session.username
    }).exec(function(err, docs) {
        res.render('reports/reports', {
            reports: docs,
            title: 'My Reports'
        });
    });
});

module.exports = router;
