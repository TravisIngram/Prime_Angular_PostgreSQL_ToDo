var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
	console.log('Listening on port', port + '.\n' + 'Press CTRL + C to close connection.');
});
