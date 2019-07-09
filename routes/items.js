var express = require("express");
var router = express.Router();

var items_controller = require("../controllers/items_controller.js");
console.log("reached items route folder");
router.get("/", items_controller.dashboard);

module.exports = router;
