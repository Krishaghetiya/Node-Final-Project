const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://krishaghetiya2006_db_user:Sangit@cluster0.qksa3bu.mongodb.net/?appName=Cluster0"
);

const connectDB = mongoose.connection;

connectDB.once("connected", () => {
  console.log("MongoDB Atlas Connected");
});

module.exports = {connectDB};
