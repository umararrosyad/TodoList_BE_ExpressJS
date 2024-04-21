const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoriesController");
const auth = require("../middleware/auth");

router.get("/:user_id/categories/", auth, controller.getAll);
router.get("/:user_id/categories/:id", auth, controller.getOne);
router.post("/:user_id/categories/", auth, controller.create);
router.put("/:user_id/categories/:id", auth, controller.update);
router.delete("/:user_id/categories/:id", auth, controller.delete);
module.exports = router;
