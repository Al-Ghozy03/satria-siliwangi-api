const { Op } = require("sequelize");
const Server = require("./server");
const siswamodel = require("../../models").siswa;
const orangtuamodel = require("../../models").orangtua;
const fs = require("fs");
require("dotenv").config();

class Siswa extends Server {
  async add(req, res) {
    try {
      const body = req.body;
      const url = `/${req.file.filename}`;
      body.foto_siswa = url;
      await siswamodel.create(body);
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async list(req, res) {
    try {
      const { page, limit, q } = req.query;
      const size = (parseInt(page) - 1) * parseInt(limit);
      const { count, rows } = await siswamodel.findAndCountAll({
        ...(page !== undefined &&
          limit !== undefined && {
            offset: size,
            limit: parseInt(limit),
          }),
        ...(q !== undefined && {
          where: { nama: { [Op.substring]: q } },
        }),
        attributes: [
          "id",
          "no_induk_ss",
          "ku_genap",
          "nama",
          "jenis_kelamin",
          "tempat_lahir",
          "tanggal_lahir",
          "sekolah",
          "no_jersey",
          "foto_siswa",
        ],
        include: {
          model: orangtuamodel,
          as: "orangtua",
          attributes: [
            "id",
            "nama_ayah",
            "no_telepon_ayah",
            "nama_ibu",
            "no_telepon_ibu",
            "alamat",
          ],
        },
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
      const data = await siswamodel.findByPk(id, {
        attributes: [
          "id",
          "no_induk_ss",
          "ku_genap",
          "nama",
          "jenis_kelamin",
          "tempat_lahir",
          "tanggal_lahir",
          "sekolah",
          "no_jersey",
          "id_orangtua",
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
      const data = await siswamodel.findByPk(id);
      if (!data) return super.response(res, 404, "data tidak ditemukan");
      if (req.file !== undefined) {
        fs.unlink(`public${data.foto_siswa}`, (er) => console.log(er));
        const url = `/${req.file.filename}`;
        req.body.foto_siswa = url;
      }
      await siswamodel.update(req.body, { where: { id } });
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await siswamodel.findByPk(id);
      if (!data) return super.response(res, 404, "data tidak ditemukan");
      fs.unlink(`public${data.foto_siswa}`, (er) => console.log(er));
      await siswamodel.destroy({ where: { id } });
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async total(req, res) {
    try {
      const { count } = await siswamodel.findAndCountAll();
      return super.response(res, 200, "success", { total: count });
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
}

module.exports = new Siswa();
