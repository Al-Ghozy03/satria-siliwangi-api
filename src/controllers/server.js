class Server {
  response(res, code, message, data = null) {
    return res.status(code).json({ message, data });
  }
}

module.exports = Server;
