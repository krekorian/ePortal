"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Requests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.STRING
      },
      requestStatus: {
        type: Sequelize.BOOLEAN
      },
      bearingCost: {
        type: Sequelize.FLOAT
      },
      requestType: {
        type: Sequelize.STRING
      },
      objective: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      futureWork: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Requests");
  }
};
