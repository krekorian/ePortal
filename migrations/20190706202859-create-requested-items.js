"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("RequestedItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requestNum: {
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      tax: {
        type: Sequelize.INTEGER
      },
      purchaseType: {
        type: Sequelize.STRING
      },
      period: {
        type: Sequelize.STRING
      },
      vendor: {
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
    return queryInterface.dropTable("RequestedItems");
  }
};
