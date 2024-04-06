const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const auth = require("../middleware/auth");

router.post("/login", controller.login);
router.post("/register", controller.register);
module.exports = router;
