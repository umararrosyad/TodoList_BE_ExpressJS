const express = require("express");
const router = express.Router();
const UserRouter = require("./users")
const categoriesRouter = require("./categories")
const tasksRouter = require("./tasks")

router.get("/", (req, res) => {
  res.send("Halo, dunia!");
});

router.use("/users", UserRouter);
router.use("/users", categoriesRouter);
router.use("/users", tasksRouter);

module.exports = router;
