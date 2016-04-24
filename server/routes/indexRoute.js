var express = require('express');

var router = express.Router();

router.get('/', function(request, response) {
	response.send('Root route established.');
});

module.exports = router;
