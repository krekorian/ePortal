"use strict";

module.exports = function(sequelize, DataTypes) {
  //=======================================================================
  // data types are used when defining a new model using Sequelize.define
  //=======================================================================
  const RequestedItems = sequelize.define("RequestedItems", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    requestNum: {
      //set limit: STRING(300) = VARCHAR(300)
      type: DataTypes.INTEGER,
      allowNull: true
    },
    item: {
      //can change to string for boo if true=approved, false=denied
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    purchaseType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    period: {
      //should fix limit after we specify varrying lengths of this data
      //otherwise default characters: 255
      type: DataTypes.STRING(999999999),
      allowNull: false
    },
    vendor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // may delete since created, and id most likely created dynamically by sequelize
    //********************************************************************************************************************************
    //NOTE: if you are using Sequelize migrations (ex: module.exports = {}) you will need to add the createdAt and updatedAt fields to your migration definition
    //********************************************************************************************************************************
    // Timestamps
    createdAt: Sequelize.DATE, //should give date + time
    updatedAt: Sequelize.DATE
  });

  //====================================================================================
  // May delete if no data to associate accross table data files
  //====================================================================================

  //   RequestedItems.associate = function (models) {
  //     // associations can be defined here
  //     //used to associate Trip.js to User.js
  //     RequestedItems.belongsTo(models.Requests, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   }
  //====================================================================================
  //====================================================================================

  return RequestedItems;
};
