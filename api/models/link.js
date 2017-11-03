var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LinkSchema = new Schema({
    name: String,
    url: String
});

module.exports = LinkSchema;