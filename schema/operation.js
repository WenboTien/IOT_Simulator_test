var mongoose = require('mongoose');

var operationSchema = new mongoose.Schema({
    msg : String,
    username : String,
    timestamp : Number
});

var operation = mongoose.model('operation', operationSchema);

module.exports = operation;