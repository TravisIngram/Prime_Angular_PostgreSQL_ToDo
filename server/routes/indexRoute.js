var express = require('express');
var path = require('path');

var router = express.Router();
// var categoryRoute = require('./categoryRoute.js');
var taskRoute = require('./taskRoute');

router.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// router.use('/categoryRoute', categoryRoute);
router.use('/taskRoute', taskRoute);

module.exports = router;
