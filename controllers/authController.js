const User = require("../models/User");
const Product = require("../models/Product");
const { loginUser } = require("../middleware/authMiddleware");


const signup = async (req, res) => {
  await User.create(req.body);
  res.redirect("/login");
};


const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    loginUser();

    const products = await Product.find(); 
    res.render("product", { products });

  } else {
    res.render("login", {
      error: "Invalid email or password"
    });
  }
};


const signupPage = (req, res) => {
  res.render("signup");
};

const loginPage = (req, res) => {
  res.render("login", { error: null });
};

module.exports = {
  signup,
  login,
  signupPage,
  loginPage
};
