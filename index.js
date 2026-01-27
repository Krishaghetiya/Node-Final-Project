const express = require("express");
require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cookieParser = require("cookie-parser");


const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", productRoutes);


app.use("/", authRoutes);

app.listen(port, () => {
  console.log("Server Strated....");
  console.log(`http://localhost:${port}`);
});
