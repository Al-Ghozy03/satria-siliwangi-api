'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn("iuran_bulanans","id_siswa")
  },

  async down (queryInterface, Sequelize) {
  }
};
