var router = require("express").Router();
var mongoose = require("mongoose");

var Job = require('./../models/Job');

router.post('/jobpost', function(req, res) {
    console.log(req.body);
    var newJob = new Job(req.body);
    newJob.save(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })

});

router.get('/all', function(req, res) {
    Job.find({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.put('/apply/:id', function(req, res) {
    Job.findOneAndUpdate({ '_id': req.params.id }, {
        '$push': {
            applied: req.body
        }
    }, function(err, doc) {
        if (err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    });
});

module.exports = router;