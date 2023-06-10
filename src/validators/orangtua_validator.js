const { check } = require("express-validator");

const orangtuaValidator = [
  check("nama_ayah")
    .isLength({ min: 1 })
    .withMessage("nama ayah tidak boleh kosong"),
  check("no_telepon_ayah")
    .isLength({ min: 1 })
    .withMessage("no telepon ayah tidak boleh kosong")
    .isNumeric()
    .withMessage("masukan no telepon yang valid"),
  check("nama_ibu")
    .isLength({ min: 1 })
    .withMessage("nama ibu tidak boleh kosong"),
  check("no_telepon_ibu")
    .isLength({ min: 1 })
    .withMessage("no telepon ibu tidak boleh kosong")
    .isNumeric()
    .withMessage("masukan no telepon yang valid"),
  check("alamat").isLength({ min: 1 }).withMessage("alamat tidak boleh kosong"),
];

module.exports = orangtuaValidator