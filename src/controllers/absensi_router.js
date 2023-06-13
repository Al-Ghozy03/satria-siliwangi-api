const Server = require("./server");
const absensimodel = require("../../models").absensi;
const siswamodel = require("../../models").siswa;

class Absensi extends Server {
  async create(req, res) {
    try {
      const body = req.body;
      await absensimodel.create(body);
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async list(req, res) {
    try {
      const { page, limit, date } = req.query;
      const size = (parseInt(page) - 1) * parseInt(limit);
      const { count, rows } = await absensimodel.findAndCountAll({
        ...(page !== undefined &&
          limit !== undefined && {
            offset: size,
            limit: parseInt(limit),
          }),
        where: {
          ...(date !== undefined && {
            tanggal: date,
          }),
        },
        order: [["tanggal", "DESC"]],
        attributes: ["id", "tanggal", "jam", "status"],
        include: {
          model: siswamodel,
          attributes: [
            "id",
            "no_induk_ss",
            "nama",
            "jenis_kelamin",
            "no_jersey",
            "foto_siswa",
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
      const data = await absensimodel.findByPk(id, {
        attributes: ["id", "tanggal", "jam", "status"],
        include: {
          model: siswamodel,
          attributes: [
            "id",
            "no_induk_ss",
            "nama",
            "jenis_kelamin",
            "no_jersey",
            "foto_siswa",
          ],
        },
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
      const data = await absensimodel.findByPk(id);
      if (!data) return super.response(res, 404, "data tidak ditemukan");
      await absensimodel.update(req.body, { where: { id } });
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const data = await absensimodel.findByPk(id);
      if (!data) return super.response(res, 404, "data tidak ditemukan");
      await absensimodel.destroy({ where: { id } });
      return super.response(res, 200, "success");
    } catch (er) {
      console.log(er);
      return super.response(res, 500, er);
    }
  }
  async grafik(req,res){
    
  }
}

module.exports = new Absensi();
