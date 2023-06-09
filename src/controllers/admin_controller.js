const Server = require("./server");
const adminmodel = require("../../models").admin;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class Admin extends Server {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const data = await adminmodel.findOne({ where: { email } });
      if (!data) return super.response(res, 404, "email tidak ditemukan");
      const check = await bcrypt.compareSync(password, data.password);
      if (!check) return super.response(res, 401, "password salah");
      const token = jwt.sign({ email: data.email }, process.env.JWT_SIGN);
      return super.response(res, 200, "success", { token });
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
}

module.exports = new Admin();
