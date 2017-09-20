var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: String,
    img: String,
    img_alt: String,
    tagline: String,
    description: String,
    github: String,
    link: String
});

module.exports = ProjectSchema;
