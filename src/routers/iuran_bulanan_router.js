const iuran_bulanan_controller = require("../controllers/iuran_bulanan_controller");
const { jwtMiddleware } = require("../middlewares/jwt_middleware");
const router = require("express")();

router.get("/total-perbulan", iuran_bulanan_controller.totalPerBulan);
router.use(jwtMiddleware);
router.post("/bulk", iuran_bulanan_controller.bulk);
router.get("/", iuran_bulanan_controller.list);
router.get("/:id", iuran_bulanan_controller.detail);
router.put("/edit/:id", iuran_bulanan_controller.edit);
router.delete("/delete/:id", iuran_bulanan_controller.delete);
module.exports = { iuran_bulanan_router: router };
