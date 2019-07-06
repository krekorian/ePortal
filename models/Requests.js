"use strict";
module.exports = (sequelize, DataTypes) => {
  const Requests = sequelize.define(
    "Requests",
    {
      userID: DataTypes.STRING,
      requestStatus: DataTypes.BOOLEAN,
      bearingCost: DataTypes.FLOAT,
      requestType: DataTypes.STRING,
      objective: DataTypes.STRING,
      note: DataTypes.STRING,
      futureWork: DataTypes.STRING
    },
    {}
  );
  Requests.associate = function(models) {
    // associations can be defined here
  };
  return Requests;
};
