"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class iuran_bulanans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      iuran_bulanans.belongsTo(models.orangtua, { foreignKey: "id_orangtua" });
    }
  }
  iuran_bulanans.init(
    {
      tanggal_pembayaran: DataTypes.DATEONLY,
      status: DataTypes.ENUM("terbayar", "belum terbayar"),
      id_orangtua: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "iuran_bulanans",
    }
  );
  return iuran_bulanans;
};
