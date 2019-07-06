var express = require('express');
var router = express.Router();

var application_controller = require('../controllers/dashboard_controller');

router.get('/', application_controller.dashboard);

module.exports = router;