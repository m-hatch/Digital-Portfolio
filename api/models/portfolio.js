var mongoose = require('mongoose');
var ProjectSchema = require('./project.js');

var Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
    projects: [ ProjectSchema ]
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);