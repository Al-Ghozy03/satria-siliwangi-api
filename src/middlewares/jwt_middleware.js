const jwt = require("jsonwebtoken");
const adminmodel = require("../../models").admin;
require("dotenv").config();

const jwtMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === undefined)
    return res
      .status(401)
      .json({ message: "token must be provided", data: null });
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SIGN, async (err, decode) => {
    if (err) return res.status(401).json({ message: err.message, data: null });
    try {
      const data = await adminmodel.findByPk(decode?.id);
      if (!data)
        return res
          .status(404)
          .json({ message: "admin tidak ditemukan", data: null });
      next();
    } catch (er) {
      return res.status(500).json({ message: er, data: null });
    }
  });
};

module.exports = { jwtMiddleware };
