'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orangtua extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orangtua.init({
    nama_ayah: DataTypes.STRING,
    no_telepon_ayah: DataTypes.STRING,
    nama_ibu: DataTypes.STRING,
    no_telepon_ibu: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orangtua',
  });
  return orangtua;
};