var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var connection = require('./models/dbConnection.js');

var indexRoute = require('./routes/indexRoute.js');

connection.initializeStatus();
connection.initializeCategory();
connection.initializeTask();
connection.initializeUser();

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/', indexRoute);

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
	console.log('Listening on port', port + '.\n' + 'Press CTRL + C to close connection.');
});
