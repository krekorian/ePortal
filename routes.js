module.exports = function (app) {

  const dashboard = require("./routes/dashboard");

  app.use("/", dashboard);

};
