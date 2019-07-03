"use strict";
var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6, 40] // only allow values with length between 6 and 40
        }
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      //==============================================================================
      //==============================================================================
      //You can customize allowNull error message by setting the notNull validator:
      //==============================================================================
      //==============================================================================

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true, //find more built-in validator: http://docs.sequelizejs.com/manual/models-definition.html
          notNull: {
            msg: "Please enter your email"
          }
        }
      },
      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      // Hooks are automatic methods that run during various phases of the User Model lifecycle
      // In this case, before a User is created, we will automatically hash their password
      hooks: {
        //Hooks, before we create, hash the users password
        beforeCreate: function(user, options) {
          user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
          );
        }
      }
    }
  );
  User.prototype.validPassword = function(password) {
    //give me the encrypted data for their password
    return bcrypt.compareSync(password, this.password);
  };

  //====================================================================================
  // May delete if no data to associate accross table data files
  //====================================================================================

  //   User.associate = function(models) {
  //     // associations can be defined here
  //     User.hasMany(models.Trip, {
  //       onDelete: "cascade"
  //     });
  //   }

  //====================================================================================
  //====================================================================================

  return User;
};
