const express = require("express");
const {
  signup,
  login,
  signupPage,
  loginPage
} = require("../controllers/authController");

const { isAuth } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);


router.get("/", signupPage);
router.get("/login", loginPage);



module.exports = router;
