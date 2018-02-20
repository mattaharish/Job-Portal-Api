var router = require("express").Router();
var mongoose = require("mongoose");

var User = require('./../models/User');

router.post('/create-user', function(req, res) {
    console.log(req.body);
    var newUser = new User(req.body);
    newUser.save(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })

});

module.exports = router;