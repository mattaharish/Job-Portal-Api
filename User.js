var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    skills: {
        type: String
    }
});

var User = module.exports = mongoose.model('User', userSchema);