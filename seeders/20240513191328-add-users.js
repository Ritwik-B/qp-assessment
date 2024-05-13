"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Clear existing data
    await queryInterface.bulkDelete("users", null, {});

    // Insert new data
    await queryInterface.bulkInsert("users", [
      {
        name: "Admin One",
        email: "admin1@example.com",
        role: "admin",
        password: bcrypt.hashSync("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Admin Two",
        email: "admin2@example.com",
        role: "admin",
        password: bcrypt.hashSync("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User One",
        email: "user1@example.com",
        role: "user",
        password: bcrypt.hashSync("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User Two",
        email: "user2@example.com",
        role: "user",
        password: bcrypt.hashSync("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User Three",
        email: "user3@example.com",
        role: "user",
        password: bcrypt.hashSync("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User Four",
        email: "user4@example.com",
        role: "user",
        password: bcrypt.hashSync("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
