var mongoose = require('mongoose');
var LinkSchema = require('./link.js');

var Schema = mongoose.Schema;

var NavigationSchema = new Schema({
    links: [ LinkSchema ]
});

module.exports = mongoose.model('Navigation', NavigationSchema);