const { check } = require("express-validator");
const siswamodel = require("../../models").siswa;

const absensiValidator = [
  check("id_siswa")
    .isLength({ min: 1 })
    .withMessage("id siswa tidak boleh kosong")
    .isNumeric()
    .withMessage("masukan data yang valid")
    .custom(async (v) => {
      const check = await siswamodel.findByPk(v);
      if (!check) throw new Error("id siswa tidak ditemukan");
    }),
  check("tanggal")
    .isLength({ min: 1 })
    .withMessage("tanggal tidak boleh kosong")
    .isDate()
    .withMessage("masukan tanggal yang valid"),
  check("jam")
    .isLength({ min: 1 })
    .withMessage("jam tidak boleh kosong")
    .isTime()
    .withMessage("masukan jam yang valid"),
  check("status")
    .isLength({ min: 1 })
    .withMessage("status tidak boleh kosong")
    .isIn(["hadir", "tidak hadir"])
    .withMessage("status hanya hadir dan tidak hadir"),
];

module.exports = absensiValidator;
