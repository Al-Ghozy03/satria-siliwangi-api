"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  siswa.init(
    {
      no_induk_ss: DataTypes.STRING,
      ku_genap: DataTypes.STRING,
      nama: DataTypes.STRING,
      jenis_kelamin: DataTypes.ENUM("laki-laki", "perempuan"),
      tempat_lahir: DataTypes.STRING,
      tanggal_lahir: DataTypes.DATEONLY,
      sekolah: DataTypes.STRING,
      no_jersey: DataTypes.INTEGER,
      id_orangtua: DataTypes.INTEGER,
      foto_siswa: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "siswa",
    }
  );
  return siswa;
};
