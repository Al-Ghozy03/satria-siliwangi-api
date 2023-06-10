const orangtua_controller = require("../controllers/orangtua_controller");
const { jwtMiddleware } = require("../middlewares/jwt_middleware");
const validatorMiddleware = require("../middlewares/validator_middleware");
const orangtuaValidator = require("../validators/orangtua_validator");
const router = require("express")();

router.post("/login", orangtua_controller.login);
router.use(jwtMiddleware);
router.post(
  "/add",
  orangtuaValidator,
  validatorMiddleware,
  orangtua_controller.add
);
router.get("/", orangtua_controller.list);
router.get("/:id", orangtua_controller.detail);
router.put(
  "/edit/:id",
  orangtuaValidator,
  validatorMiddleware,
  orangtua_controller.edit
);
router.delete("/delete/:id", orangtua_controller.delete);
module.exports = { orangtua_router: router };
