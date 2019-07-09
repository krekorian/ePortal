"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("RequestStatuses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requestNum: {
        type: Sequelize.INTEGER
      },
      itMN: {
        type: Sequelize.BOOLEAN
      },
      SP1: {
        type: Sequelize.BOOLEAN
      },
      SP2: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable("RequestStatuses");
  }
};
