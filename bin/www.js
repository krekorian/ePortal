var debug = require("debug")("express-example");

//app exported from server.js
var app = require("../server");

//models we exported
var db = require("../models");

//set port for webhost
app.set("port", process.env.PORT || 3000);

//can use in sync({if not exists}) = tables created
db.sequelize.sync().then(function() {
  // set our app to listen to the port we set above

  var server = app.listen(app.get("port"), function() {
    // then save a log of the listening to our debugger.
    debug("Express server listening on port " + server.address().port);
  });
});
