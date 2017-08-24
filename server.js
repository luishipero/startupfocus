// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

// var port = process.env.PORT || 8080; 				// set the port


var database = require('./config/database'); 			// load the database config
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path    = require("path");

// configuration ===============================================================
mongoose.connect(database.remoteUrl); 	// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// var engines = require('consolidate');

// api ---------------------------------------------------------------------
    // get all expenses
    // app.get('/api/expenses', function (req, res) {
    //     res.sendFile(path.join(__dirname+'/public/pages/form.html'));
    // });

    app.get('/index', function (req, res) {
        res.sendFile(path.join(__dirname+'/public/pages/index.html'));
    });

    app.get('/form', function (req, res) {
        res.sendFile(path.join(__dirname+'/public/pages/form.html'));
    });

    app.get('/notifications', function (req, res) {
        res.sendFile(path.join(__dirname+'/public/pages/notifications.html'));
    });

    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname+'/public/pages/tables.html'));
    });

    app.get('/morris', function (req, res) {
        res.sendFile(path.join(__dirname+'/public/pages/morris.html'));
    });

    app.get('/login', function (req, res) {
        res.sendFile(path.join(__dirname+'/public/pages/login.html'));
    });

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
// app.listen(port);
// console.log("App listening on port " + port);


app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});