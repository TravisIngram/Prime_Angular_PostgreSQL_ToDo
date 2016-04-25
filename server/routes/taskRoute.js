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
			var tasks = request.body.tasks;
			var status = request.body.status;
			var results = [];
			var query = client.query('INSERT INTO task (tasks, status) VALUES ($1, $2) RETURNING tasks,status', [tasks, status]);

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

router.get('/', function(request, response) {
	console.log(request.body);
	pg.connect(connectionString, function(err, client, done) {
		if(err) {
			console.log(err);
			response.sendStatus(500);
		} else {
			var query = client.query('SELECT "tasks", "status" FROM "task"');
			var results = [];

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