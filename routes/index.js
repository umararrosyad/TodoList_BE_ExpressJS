const express = require("express");
const router = express.Router();
const UserController = require("./users")

router.get("/", (req, res) => {
  res.send("Halo, dunia!");
});

router.use("/users", UserController);

module.exports = router;
