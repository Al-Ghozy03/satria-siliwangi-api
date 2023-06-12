const absensi_controller = require("../controllers/absensi_router");
const { jwtMiddleware } = require("../middlewares/jwt_middleware");
const validatorMiddleware = require("../middlewares/validator_middleware");
const absensiValidator = require("../validators/absensi_validator");
const router = require("express")();

router.use(jwtMiddleware);
router.post("/create", absensiValidator, validatorMiddleware, absensi_controller.create);
router.get("/", absensi_controller.list);
router.get("/:id", absensi_controller.detail);
router.put("/edit/:id", absensi_controller.edit);
router.delete("/delete/:id", absensi_controller.delete);
module.exports = { absensi_router: router };
