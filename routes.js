module.exports = function(app) {
  const login = require("./routes/login");
  const items = require("./routes/items");
  const dashboard = require("./routes/dashboard");
  const requests = require('./routes/requests')
  console.log("REaching main routes file");
  app.use("/", login);
<<<<<<< HEAD
  app.use("/items", items);
=======
  app.use('/requests', requests)
>>>>>>> master
  // app.use("/dashboard", dashboard);
};
