var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();


mongoose.connect("mongodb://localhost/JobPortal");

var db = mongoose.connection;

db.on("connected", function() {
    console.log("Connected to db..");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', require('./server/controllers/job-post.js'));
app.use('/', require('./server/controllers/user.js'));

app.listen(3000, function() {
    console.log("Server running on port 3000");
})