const express = require("express");
const {
  addEmp,
  updateEmpById,
  getEmp,
  deleteEmp,

} = require("../controllers/empController");
const router = express.Router();
// router.route("/").post(addEmp);

router.route("/").get(getEmp);
router.route("/").post(addEmp);
router.route("/:id").put(updateEmpById);
router.route("/:id").delete(deleteEmp);
module.exports = router;
