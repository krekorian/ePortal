// Dependencies
// ============
const express = require("express");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
const passport = require("./config/passport");
const config = require("./config/extra-config");
// Express settings
// ================
const app = express();

//allow sessions
// app.use(session({ secret: 'booty Mctootie', cookie: { maxAge: 60000 }}));

// view engine setup
app.set("views", path.join(__dirname, "views"));

//set up handlebars
const exphbs = require("express-handlebars");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//if want to authenticate users use middleware for isAuth, authCHeck
//list app.use
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   session({ secret: config.sessionKey, resave: true, saveUninitialized: true })
// );
app.use(passport.initialize());
app.use(passport.session());

//Place routes in routes.js export and require on server to use
require("./routes")(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: app.get("env") === "development" ? err : {}
  });
});

console.log("reaching server.js")

//export module as app use in bin/www use server4
module.exports = app;
