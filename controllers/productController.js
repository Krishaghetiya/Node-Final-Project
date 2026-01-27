const Product = require("../models/Product");


const addProductPage = (req, res) => {
  res.render("addProduct");
};


const addProduct = async (req, res) => {
  const { name, price, image } = req.body;
  await Product.create({ name, price, image });
  res.redirect("/product");
};


const editProductPage = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render("editProduct", { product });
};


const updateProduct = async (req, res) => {
  const { name, price, image } = req.body;
  await Product.findByIdAndUpdate(req.params.id, { name, price, image });
  res.redirect("/product");
};


const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/product");
};

module.exports = {
  addProductPage,
  addProduct,
  editProductPage,
  updateProduct,
  deleteProduct
};
