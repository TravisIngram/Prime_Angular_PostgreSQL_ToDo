var pg = require('pg');

var connectionString = 'postgres://localhost:5432/angularSQLToDo';

function initializeStatus() {
	pg.connect(connectionString, function(err, client, done) {
		if(err) {
			console.log(err);
			process.exit(1);
		} else {
			var query = client.query('CREATE TABLE IF NOT EXISTS status ("id" serial PRIMARY KEY, "status" varchar(25) NOT NULL)');

			query.on('end', function() {
				console.log('Successfully created schema.');
				done();
			});

			query.on('error', function(error) {
				console.log('Error creating schema.', error);
				process.exit(1);
			});
		}
	});
}

function initializeCategory() {
	pg.connect(connectionString, function(err, client, done) {
		if(err) {
			console.log(err);
			process.exit(1);
		} else {
			var query = client.query('CREATE TABLE IF NOT EXISTS category ("id" serial PRIMARY KEY, "catName" varchar(50) NOT NULL)');

			query.on('end', function() {
				console.log('Successfully created schema.');
				done();
			});

			query.on('error', function(error) {
				console.log('Error creating schema.', error);
				process.exit(1);
			});
		}
	});
}

function initializeTask() {
	pg.connect(connectionString, function(err, client, done) {
		if(err) {
			console.log(err);
			process.exit(1);
		} else {
			var query = client.query('CREATE TABLE IF NOT EXISTS task ("id" serial PRIMARY KEY, "tasks" text NOT NULL, FOREIGN KEY "user_id" int REFERENCES user (id),' + 
				' FOREIGN KEY "category_id" int REFERENCES category (id), FOREIGN KEY "status_id" int REFERENCES status (id))');

			query.on('end', function() {
				console.log('Successfully created schema.');
				done();
			});

			query.on('error', function(error) {
				console.log('Error creating schema.', error);
				process.exit(1);
			});
		}
	});
}

function initializeUser() {
	pg.connect(connectionString, function(err, client, done) {
		if(err) {
			console.log(err);
			process.exit(1);
		} else {
			var query = client.query('CREATE TABLE IF NOT EXISTS user ("id" serial PRIMARY KEY, "username" varchar(25) NOT NULL, "task_id" int REFERENCES task (id),' +
				' "category_id" int REFERENCES category (id), "status_id" int REFERENCES status (id))');

			query.on('end', function() {
				console.log('Successfully created schema.');
				done();
			});

			query.on('error', function(error) {
				console.log('Error creating schema.', error);
				process.exit(1);
			});
		}
	});
}

module.exports.connectionString = connectionString;
module.exports.initializeStatus = initializeStatus;
module.exports.initializeCategory = initializeCategory;
module.exports.initializeTask = initializeTask;
module.exports.initializeUser = initializeUser;