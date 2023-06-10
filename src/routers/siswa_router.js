const siswa_controller = require("../controllers/siswa_controller");
const { jwtMiddleware } = require("../middlewares/jwt_middleware");
const upload = require("../middlewares/upload");
const validatorMiddleware = require("../middlewares/validator_middleware");
const siswaValidator = require("../validators/siswa_validator");
const router = require("express")();

router.use(jwtMiddleware);
router.post(
  "/add",
  upload.single("foto_siswa"),
  siswaValidator,
  validatorMiddleware,
  siswa_controller.add
);
router.get("/", siswa_controller.list);
router.get("/:id", siswa_controller.detail);
router.put("/edit/:id", upload.single("foto_siswa"), siswa_controller.edit);
router.delete("/delete/:id", siswa_controller.delete);
module.exports = { siswa_router: router };
