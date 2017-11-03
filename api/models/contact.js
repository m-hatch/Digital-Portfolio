var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    heading: String,
    text: String
});

module.exports = mongoose.model('Contact', ContactSchema);