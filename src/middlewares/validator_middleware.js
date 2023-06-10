const { validationResult } = require("express-validator");

const validatorMiddleware = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty())
    return res.status(400).json({
      message: "semua field harus diisi",
      data: {
        error: error
          .array()
          .map((er) => ({ body_name: er.path, message: er.msg })),
      },
    });
  next();
};

module.exports = validatorMiddleware
