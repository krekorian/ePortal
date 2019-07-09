var express = require('express');
var router = express.Router();

var createRequest_controller = require('../controllers/requests_controller.js');

console.log("requests route folder")

router.get('/', createRequest_controller.request);

module.exports = router;