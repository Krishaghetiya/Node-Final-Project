const express = require("express");
const Product = require("../models/Product");
const { isAuth } = require("../middleware/authMiddleware");
const {
  addProductPage,
  addProduct,
  editProductPage,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const router = express.Router();


router.get("/product", isAuth, async (req, res) => {
  const products = await Product.find();
  res.render("product", { products });
});




router.get("/add-to-cart/:id", isAuth, async (req, res) => {
  const product = await Product.findById(req.params.id);

  let cart = req.cookies.cart || [];

  const index = cart.findIndex(i => i._id === product.id);

  if (index !== -1) {
    cart[index].qty += 1;
  } else {
    cart.push({
      _id: product.id,
      name: product.name,
      price: product.price,
      qty: 1
    });
  }

  res.cookie("cart", cart);
  res.redirect("/cart");
});


router.get("/cart", isAuth, (req, res) => {
  res.render("cart", { cart: req.cookies.cart || [] });
});




router.get("/add-product", isAuth, addProductPage);
router.post("/add-product", isAuth, addProduct);


router.get("/edit-product/:id", isAuth, editProductPage);
router.post("/edit-product/:id", isAuth, updateProduct);


router.get("/delete-product/:id", isAuth, deleteProduct);





router.get("/cart-decrease/:id", isAuth, (req, res) => {
  let cart = req.cookies.cart || [];

  cart = cart.map(item => {
    if (item._id === req.params.id) {
      item.qty -= 1;
    }
    return item;
  }).filter(item => item.qty > 0);

  res.cookie("cart", cart);
  res.redirect("/cart");
});

router.get("/cart-remove/:id", isAuth, (req, res) => {
  let cart = req.cookies.cart || [];
  cart = cart.filter(item => item._id !== req.params.id);
  res.cookie("cart", cart);
  res.redirect("/cart");
});


module.exports = router;
