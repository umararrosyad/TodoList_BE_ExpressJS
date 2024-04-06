const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoriesController");
const auth = require("../middleware/auth");

router.get("/", auth, controller.getAll);
router.get("/:id", auth, controller.getOne);
router.post("/", auth, controller.create);
router.put("/:id", auth, controller.update);
router.delete("/:id", auth, controller.delete);
module.exports = router;
