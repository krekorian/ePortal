module.exports = function(app) {
  const login = require("./routes/login");
  const items = require("./routes/items");
  const dashboard = require("./routes/dashboard");
  console.log("REaching main routes file");
  app.use("/", login);
  app.use("/items", items);
  // app.use("/dashboard", dashboard);
};
