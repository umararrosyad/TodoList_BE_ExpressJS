const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasksController");
const auth = require("../middleware/auth");

router.get("/:user_id/tasks/", auth, controller.getAll);
router.get("/:user_id/tasks/:id", auth, controller.getOne);
router.post("/:user_id/tasks/", auth, controller.create);
router.put("/:user_id/tasks/:id", auth, controller.update);
router.delete("/:user_id/tasks/:id", auth, controller.delete);
module.exports = router;
