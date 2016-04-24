var express = require('express');
var router = express.Router();

var pg = require('pg');
var connection = require('../models/dbConnection.js');
var connectionString = connection.connectionString;

router.post('/', function(request, response) {
	console.log(request.body);
	pg.connect(connectionString, function(err, client, done) {
		if(err) {
			console.log(err);
			response.sendStatus(500);
		} else {
			var task = request.body.task;
			var results = [];
			var query = client.query('INSERT INTO task (task) VALUES ($1) RETURNING task', [task]);

			query.on('error', function(error) {
				console.log(error);
				response.sendStatus(500);
				done();
			});

			query.on('row', function(rowData) {
				results.push(rowData);
			});

			query.on('end', function() {
				response.send(results);
				done();
			});
		}
	});
});

module.exports = router;
