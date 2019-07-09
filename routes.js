module.exports = function (app) {
  const login = require("./routes/login");
  const dashboard = require("./routes/dashboard");
  console.log("REaching main routes file");
  app.use("/", login);
  // app.use("/dashboard", dashboard);
};
