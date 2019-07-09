module.exports = function (app) {
  const login = require("./routes/login");
  const dashboard = require("./routes/dashboard");
  const requests = require('./routes/requests')
  console.log("REaching main routes file");
  app.use("/", login);
  app.use('/requests', requests)
  // app.use("/dashboard", dashboard);
};
