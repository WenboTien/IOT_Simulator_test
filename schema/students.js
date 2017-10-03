var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    id : String,
    username : String,
    password : String
});


var student = mongoose.model('student', studentSchema);

module.exports = student;