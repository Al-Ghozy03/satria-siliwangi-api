const { Op } = require("sequelize");
const Server = require("./server");
const orangtuamodel = require("../../models").orangtua;
const jwt = require("jsonwebtoken");
require("dotenv").config();

class OrangTua extends Server {
  async add(req, res) {
    try {
      const body = req.body;
      await orangtuamodel.create(body);
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async login(req, res) {
    try {
      const { no_telepon } = req.body;
      const data = await orangtuamodel.findOne({
        where: {
          [Op.or]: { no_telepon_ayah: no_telepon, no_telepon_ibu: no_telepon },
        },
      });
      if (!data) return super.response(res, 404, "no telepon tidak ditemukan");
      const token = jwt.sign(
        { id: data.id, email: data.email },
        process.env.JWT_SIGN
      );
      return super.response(res, 200, "success", { token });
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async list(req, res) {
    try {
      const { page, limit } = req.query;
      const size = (parseInt(page) - 1) * parseInt(limit);
      const { count, rows } = await orangtuamodel.findAndCountAll({
        ...(page !== undefined &&
          limit !== undefined && {
            offset: size,
            limit: parseInt(limit),
          }),
        attributes: [
          "id",
          "nama_ayah",
          "no_telepon_ayah",
          "nama_ibu",
          "no_telepon_ibu",
          "alamat",
        ],
      });
      return super.responseWithPagination(
        res,
        200,
        "success",
        count,
        Math.ceil(count / parseInt(limit)),
        parseInt(page),
        rows
      );
    } catch (er) {
      console.log(er);
      return super.responseWithPagination(res, 500, er);
    }
  }
  async detail(req, res) {
    try {
      const { id } = req.params;
      const data = await orangtuamodel.findByPk(id, {
        attributes: [
          "id",
          "nama_ayah",
          "no_telepon_ayah",
          "nama_ibu",
          "no_telepon_ibu",
          "alamat",
        ],
      });
      if (!data) return super.response(res, 404, "data tidak ditemukan");
      return super.response(res, 200, "success", data);
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async edit(req, res) {
    try {
      const { id } = req.params;
      const data = await orangtuamodel.findByPk(id);
      if (!data) return super.response(res, 404, "data tidak ditemukan");
      await orangtuamodel.update(req.body, { where: { id } });
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await orangtuamodel.findByPk(id);
      if (!data) return super.response(res, 404, "data tidak ditemukan");
      await orangtuamodel.destroy({ where: { id } });
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
}

module.exports = new OrangTua();
