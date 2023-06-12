"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("siswas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      no_induk_ss: {
        type: Sequelize.STRING,
      },
      ku_genap: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
      },
      jenis_kelamin: {
        type: Sequelize.ENUM("laki-laki", "perempuan"),
      },
      tempat_lahir: {
        type: Sequelize.STRING,
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY,
      },
      sekolah: {
        type: Sequelize.STRING,
      },
      no_jersey: {
        type: Sequelize.INTEGER,
      },
      id_orangtua: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "orangtuas",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("siswas");
  },
};
