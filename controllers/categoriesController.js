const { Category } = require("../models");

class categoryController {
  static async getAll(req, res, next) {
    try {
      const { user_id } = req.params;
      let data = await Category.findAll({ where: { user_id } });
      if (!data[0]) {
        throw { name: "notFound" };
      }
      res.status(200).json({
        status: "success",
        message: "Data berhasil ditemukan.",
        data
      });
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const { id } = req.params;
      let data = await Category.findByPk(id);
      if (!data) {
        throw { name: "notFound" };
      }
      res.status(200).json({
        status: "success",
        message: "Data berhasil ditemukan.",
        data
      });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { user_id } = req.params;
      const { category_name } = req.body;
      const data = await Category.create({ user_id, category_name });
      res.status(200).json({
        status: "success",
        message: "Data berhasil dibuat.",
        data
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { category_name } = req.body;
      const data = await Category.update({ category_name }, { where: { id } });
      let dataupdate;
      if (data[0] == 1) {
        dataupdate = await Category.findByPk(id);
      }
      res.status(200).json({
        status: "success",
        message: "Data berhasil diedit.",
        dataupdate
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = Category.findByPk(id);
      if (!data) {
        throw { name: "notFound" };
      }
      await Category.destroy({ where: { id } });
      res.status(200).json({
        status: "success",
        message: "data berhasil dihapus",
        data
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = categoryController;
