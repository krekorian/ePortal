"use strict";

module.exports = function(sequelize, DataTypes) {
  //=======================================================================
  // data types are used when defining a new model using Sequelize.define
  //=======================================================================
  const Requests = sequelize.define("Requests", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      //set limit: STRING(300) = VARCHAR(300)
      type: DataTypes.STRING,
      allowNull: true
    },
    requestStatus: {
      //can change to string for boo if true=approved, false=denied
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1] // only allow values with length 1
      }
    },
    bearingCost: {
      //limits: FLOAT ("length", "decimals") => FLOAT(5, 4)
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    requestType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    objecive: {
      //should fix limit after we specify varrying lengths of this data
      //otherwise default characters: 255
      type: DataTypes.STRING(999999999),
      allowNull: false
    },
    note: {
      //should fix limit after we specify varrying lengths of this data
      type: DataTypes.STRING(999999999),
      allowNull: false
    },
    futureWork: {
      //should fix limit after we specify varrying lengths of this data
      //since null=false may leave n/a as comment if no future work?
      type: DataTypes.STRING(999999999),
      allowNull: false
    },
    // may delete since created, and id most likely created dynamically by sequelize
    //********************************************************************************************************************************
    //NOTE: if you are using Sequelize migrations (ex: module.exports = {}) you will need to add the createdAt and updatedAt fields to your migration definition
    //********************************************************************************************************************************
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });

  //====================================================================================
  // May delete if no data to associate accross table data files
  //====================================================================================

  //   Requests.associate = function (models) {
  //     // associations can be defined here
  //     //used to associate Trip.js to User.js
  //     Requests.belongsTo(models.User, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   }
  //====================================================================================
  //====================================================================================

  return Requests;
};
