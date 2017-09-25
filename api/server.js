var express = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routes/router.js');
var myinfoRoute = require('./routes/myinfoRoute.js');
var navigationRoute = require('./routes/navigationRoute.js');
var aboutRoute = require('./routes/aboutRoute.js');
var portfolioRoute = require('./routes/portfolioRoute.js');
var contactRoute = require('./routes/contactRoute.js');
var allDataRoute = require('./routes/allDataRoute.js');
var mailRoute = require('./routes/mailRoute.js');

// initialize api and configure to get data from POST
var api = express();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

var port = process.env.PORT || 3000; 

// connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/myapi');

// register routes
api.use('/', router);
api.use('/myinfo', myinfoRoute);
api.use('/navigation', navigationRoute);
api.use('/about', aboutRoute);
api.use('/portfolio', portfolioRoute);
api.use('/contact', contactRoute);
api.use('/alldata', allDataRoute);
api.use('/mail', mailRoute);

// start server
api.listen(port);
console.log('server started on port ' + port);