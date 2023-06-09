'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orangtuas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_ayah: {
        type: Sequelize.STRING
      },
      no_telepon_ayah: {
        type: Sequelize.STRING
      },
      nama_ibu: {
        type: Sequelize.STRING
      },
      no_telepon_ibu: {
        type: Sequelize.STRING
      },
      alamat: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orangtuas');
  }
};