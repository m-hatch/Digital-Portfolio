var mongoose = require('mongoose');
var LinkSchema = require('./link.js');

var Schema = mongoose.Schema;

var MyInfoSchema = new Schema({
    name: String,
    title: String,
    position_title: String,
    links: [ LinkSchema ]
});

module.exports = mongoose.model('MyInfo', MyInfoSchema);