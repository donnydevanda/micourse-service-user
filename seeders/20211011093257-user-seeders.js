"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "admin",
        profession: "Owner",
        role: "admin",
        email: "admin@micro.com",
        password: await bcrypt.hash("micro1106", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "user",
        profession: "Student",
        role: "student",
        email: "user@micro.com",
        password: await bcrypt.hash("micro1106", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
