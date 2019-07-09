var express = require('express');
var router = express.Router();

var login_controller = require('../controllers/login_controller.js');
console.log("reached login route folder");
router.get('/', login_controller.dashboard);

module.exports = router;