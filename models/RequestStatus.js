"use strict";
module.exports = (sequelize, DataTypes) => {
  const RequestStatus = sequelize.define(
    "RequestStatus",
    {
      requestNum: DataTypes.INTEGER,
      itMN: DataTypes.BOOLEAN,
      SP1: DataTypes.BOOLEAN,
      SP2: DataTypes.BOOLEAN
    },
    {}
  );
  RequestStatus.associate = function(models) {
    // associations can be defined here
  };
  return RequestStatus;
};
