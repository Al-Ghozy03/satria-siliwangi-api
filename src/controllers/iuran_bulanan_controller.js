const Server = require("./server");
const iuranbulananmodel = require("../../models").iuran_bulanans;
const siswamodel = require("../../models").siswa;
const orangtuamodel = require("../../models").orangtua;
require("dotenv").config();

class IuranBulanan extends Server {
  async bulk(req, res) {
    try {
      const body = req.body;
      for (let i = 0; i < body.length; i++) {
        const data = body[i];
        const checkSiswa = await siswamodel.findByPk(data.id_siswa);
        const checkOrangtua = await orangtuamodel.findByPk(data.id_orangtua);
        if (!checkSiswa)
          return super.response(
            res,
            404,
            `id siswa tidak ditemukan di field ke ${i + 1}`
          );
        if (!checkOrangtua)
          return super.response(
            res,
            404,
            `id orangtua tidak ditemukan di field ke ${i + 1}`
          );
      }
      await iuranbulananmodel.bulkCreate(body);
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async list(req, res) {
    try {
      const { page, limit } = req.query;
      const size = (parseInt(page) - 1) * parseInt(limit);
      const { count, rows } = await iuranbulananmodel.findAndCountAll({
        ...(page !== undefined &&
          limit !== undefined && {
            offset: size,
            limit: parseInt(limit),
          }),
        attributes: ["id", "tanggal_pembayaran", "status"],
        include: [
          {
            model: siswamodel,
            attributes: ["id", "no_induk_ss", "nama", "no_jersey"],
          },
          {
            model: orangtuamodel,
            attributes: [
              "nama_ayah",
              "no_telepon_ayah",
              "nama_ibu",
              "no_telepon_ibu",
              "alamat",
            ],
          },
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
      const data = await iuranbulananmodel.findByPk(id, {
        attributes: ["id", "tanggal_pembayaran", "status"],
        include: [
          {
            model: siswamodel,
            attributes: ["id", "no_induk_ss", "nama", "no_jersey"],
          },
          {
            model: orangtuamodel,
            attributes: [
              "nama_ayah",
              "no_telepon_ayah",
              "nama_ibu",
              "no_telepon_ibu",
              "alamat",
            ],
          },
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
      const data = await iuranbulananmodel.findByPk(id);
      if (!data) return super.response(res, 404, "data tidak ditemukan");
      await iuranbulananmodel.update(req.body, { where: { id } });
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await iuranbulananmodel.findByPk(id);
      if (!data) return super.response(res, 404, "data tidak ditemukan");
      await iuranbulananmodel.destroy({ where: { id } });
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
}

module.exports = new IuranBulanan();
