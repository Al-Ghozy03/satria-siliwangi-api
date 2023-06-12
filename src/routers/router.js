const { absensi_router } = require("./absensi_router");
const { admin_router } = require("./admin_router");
const { iuran_bulanan_router } = require("./iuran_bulanan_router");
const { orangtua_router } = require("./orangtua_router");
const { siswa_router } = require("./siswa_router");
const router = require("express")();

router.use("/admin", admin_router);
router.use("/orangtua", orangtua_router);
router.use("/siswa", siswa_router);
router.use("/iuran-bulanan", iuran_bulanan_router);
router.use("/absensi", absensi_router);
router.all("*", (req, res) =>
  res.status(404).json({ message: "route tidak ditemukan", data: null })
);

module.exports = router;
