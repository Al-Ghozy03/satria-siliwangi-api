const admin_controller = require("../controllers/admin_controller");
const router = require("express")();

router.post("/login", admin_controller.login);

module.exports = {admin_router:router}