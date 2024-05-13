"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("grocery_items", [
      {
        name: "Apples",
        price: 3.5,
        inventory: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bananas",
        price: 1.2,
        inventory: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Carrots",
        price: 2.0,
        inventory: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tomatoes",
        price: 2.5,
        inventory: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Potatoes",
        price: 1.8,
        inventory: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Onions",
        price: 1.5,
        inventory: 140,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("grocery_items", null, {});
  },
};
