const { admin_router } = require("./admin_router");
const router = require("express")();

router.use("/admin", admin_router);

module.exports = router;
