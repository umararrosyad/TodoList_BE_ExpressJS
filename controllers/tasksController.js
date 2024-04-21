const { Task } = require("../models");

class taskController {
  static async getAll(req, res, next) {
    try {
      const { user_id } = req.params;
      let data = await Task.findAll({ where: { user_id } });
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
      let data = await Task.findByPk(id);
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
      const { task_name, description, time, priority, category_id } = req.body;
      const data = await Task.create({ user_id, task_name, description, time, priority, category_id, completed: false });
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
      const { task_name, description, time, priority, category_id, completed } = req.body;
      const data = await Task.update({ task_name, description, time, priority, category_id, completed }, { where: { id } });
      let dataupdate;
      if (data[0] == 1) {
        dataupdate = await Task.findByPk(id);
      }
      res.status(200).json({
        status: "success",
        message: "Data berhasil dibuat.",
        dataupdate
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const data = Task.findByPk(id);
      if (!data) {
        throw { name: "notFound" };
      }
      await Task.destroy({ where: { id } });
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

module.exports = taskController;
