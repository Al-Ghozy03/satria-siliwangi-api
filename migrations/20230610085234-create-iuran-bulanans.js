'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('iuran_bulanans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal_pembayaran: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.ENUM("terbayar","belum terbayar")
      },
      id_siswa: {
        type: Sequelize.INTEGER,
        onDelete:"RESTRICT",
        onUpdate:"CASCADE",
        references:{
          model:"siswas",
          key:"id"
        }
      },
      id_orangtua: {
        type: Sequelize.INTEGER,
        onDelete:"RESTRICT",
        onUpdate:"CASCADE",
        references:{
          model:"orangtuas",
          key:"id"
        }
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
    await queryInterface.dropTable('iuran_bulanans');
  }
};