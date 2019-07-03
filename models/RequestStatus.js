"use strict";

module.exports = function(sequelize, DataTypes) {
  //=======================================================================
  // data types are used when defining a new model using Sequelize.define
  //=======================================================================
  const requestStatus = sequelize.define("requestStatus", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    requestNum: {
      //can change to string for boo if true=approved, false=denied
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itMN: {
      //limits: FLOAT ("length", "decimals") => FLOAT(5, 4)
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sP1: {
      //limits: FLOAT ("length", "decimals") => FLOAT(5, 4)
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sP2: {
      //limits: FLOAT ("length", "decimals") => FLOAT(5, 4)
      type: DataTypes.BOOLEAN,
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

  //   requestStatus.associate = function (models) {
  //     // associations can be defined here
  //     //used to associate Trip.js to User.js
  //     requestStatus.belongsTo(models.User, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   }
  //====================================================================================
  //====================================================================================

  return requestStatus;
};
