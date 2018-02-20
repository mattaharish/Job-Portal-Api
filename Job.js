var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({

    jobid: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    experience: {
        type: String
    },
    skills: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    applied: []
});

var Job = module.exports = mongoose.model('Job', jobSchema);