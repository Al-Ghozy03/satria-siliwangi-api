'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class absensi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  absensi.init({
    tanggal: DataTypes.DATEONLY,
    jam: DataTypes.TIME,
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'absensi',
  });
  return absensi;
};