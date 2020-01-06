const mongoose = require('mongoose');

const Member = new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    age: {
        type: Number,
        default: 0
    },
    skills: {
        type: String,
        default: ''
    },
    team: {
        type: String,
        default: ''
    }     
});

module.exports = mongoose.model('Member', Member);
