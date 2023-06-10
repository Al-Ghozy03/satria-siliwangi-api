const { admin_router } = require("./admin_router");
const { orangtua_router } = require("./orangtua_router");
const { siswa_router } = require("./siswa_router");
const router = require("express")();

router.use("/admin", admin_router);
router.use("/orangtua", orangtua_router);
router.use("/siswa", siswa_router);
router.all("*", (req, res) =>
  res.status(404).json({ message: "route tidak ditemukan", data: null })
);

module.exports = router;
