"use strict";
module.exports = (sequelize, DataTypes) => {
  const RequestedItems = sequelize.define(
    "RequestedItems",
    {
      requestNum: DataTypes.INTEGER,
      item: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      tax: DataTypes.INTEGER,
      purchaseType: DataTypes.STRING,
      period: DataTypes.STRING,
      vendor: DataTypes.STRING
    },
    {}
  );
  RequestedItems.associate = function(models) {
    // associations can be defined here
  };
  return RequestedItems;
};
