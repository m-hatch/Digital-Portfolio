var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExpertiseSchema = new Schema({
    is_empty: Boolean,
    icon: String,
    area: String,
    description: String
});

var AboutSchema = new Schema({
    img: String,
    description: String,
    skills_heading: String,
    skills_description: String,
    expertise: [ ExpertiseSchema ]
});

module.exports = mongoose.model('About', AboutSchema);