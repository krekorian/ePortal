module.exports = function(app) {
  const requests = require("./routes/requests");
  const users = require("./routes/users");
  const requestedItems = require("./routes/requestedItems");
  const requestStatus = require("./routes/requestStatus");

  app.use("/", requests);
  app.use("/users", users);
  app.use("/requestedItems", requestedItems);
  app.use("/requestStatus", requestStatus);
};
