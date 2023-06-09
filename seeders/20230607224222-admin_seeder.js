"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("admins", [
      {
        email: "siliwangi@gmail.com",
        password: bcrypt.hashSync("siliwangi123", 10),
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
