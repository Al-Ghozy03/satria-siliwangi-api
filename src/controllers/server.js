class Server {
  response(res, code, message, data = null) {
    return res.status(code).json({ message, data });
  }
  responseWithPagination(
    res,
    code,
    message,
    total = 0,
    total_page = 1,
    current_page = 0,
    data = null
  ) {
    return res
      .status(code)
      .json({ message, total, total_page, current_page, data });
  }
}

module.exports = Server;
