const { check } = require("express-validator");
const orangtuamodel = require("../../models").orangtua;

const siswaValidator = [
  check("no_induk_ss")
    .isLength({ min: 1 })
    .withMessage("no induk tidak boleh kosong"),
  check("ku_genap")
    .isLength({ min: 1 })
    .withMessage("KU genap tidak boleh kosong"),
  check("nama").isLength({ min: 1 }).withMessage("nama tidak boleh kosong"),
  check("sekolah")
    .isLength({ min: 1 })
    .withMessage("sekolah tidak boleh kosong"),
  check("jenis_kelamin")
    .isLength({ min: 1 })
    .withMessage("tidak boleh kosong")
    .isIn(["laki-laki", "perempuan"])
    .withMessage("jenis kelamin harus laki-laki atau perempuan"),
  check("tempat_lahir")
    .isLength({ min: 1 })
    .withMessage("tempat lahir tidak boleh kosong"),
  check("tanggal_lahir")
    .isLength({ min: 1 })
    .withMessage("tanggal lahir tidak boleh kosong")
    .isDate()
    .withMessage("masukan tanggal lahir yang valid"),
  check("no_jersey")
    .isLength({ min: 1 })
    .withMessage("no jersey tidak boleh kosong")
    .isNumeric()
    .withMessage("masukan no jersey yang valid"),
  check("id_orangtua")
    .isLength({ min: 1 })
    .withMessage("id orangtua tidak boleh kosong")
    .isNumeric()
    .withMessage("masukan id orangtua yang valid")
    .custom(async (v) => {
      const check = await orangtuamodel.findByPk(v);
      if (!check) throw new Error("orangtua tidak ditemukan");
    }),
  check("foto_siswa").custom((v, { req }) => {
    if (req.file === undefined)
      throw new Error("foto siswa tidak boleh kosong");
    if (
      req.file?.mimetype === "image/png" ||
      req.file?.mimetype === "image/jpg" ||
      req.file?.mimetype === "image/jpeg"
    )
      return true;
    throw new Error("File hanya .jpeg, .jpg, .png");
  }),
];

module.exports = siswaValidator;
