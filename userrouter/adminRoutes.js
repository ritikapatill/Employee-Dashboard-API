const express = require("express");
const { registerAdmin, adminLogin } = require("../controllers/adminController");

const router = express.Router();

router.post("/register", registerAdmin);
router.get("/login", adminLogin);

// router.post("/current", (req, res) => {
//   res.json({ message: "current  user" });
// });
module.exports = router;
