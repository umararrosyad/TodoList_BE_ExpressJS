const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {

  static async register(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password ) {
        throw { name: "nullParameter" };
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        password: hashedPassword
      });

      res.status(201).json({
        status: "success",
        message: "register berhasil",
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) {
        throw { name: "invalidCaredential" };
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw { name: "invalidCaredential" };
      }
      const token = jwt.sign({ id: user.id }, "codehorizon");
      res.status(200).json({
        status: "success",
        message: "login berhasil",
        data: user,
        token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
