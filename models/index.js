//use strict to write clean code ex: error if undeclared variables x = 3.14 instead of var x = 3.14
"use strict";

//require File Sytem: methods have a/synchronous forms
var fs = require("fs");
//Path node module: work w/directories & file paths
var path = require("path");
//obvs its sequel
var Sequelize = require("sequelize");
//use module.exports from models
var basename = path.basename(module.filename);
//store private data on .env use .env on files
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
//create array for database
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
