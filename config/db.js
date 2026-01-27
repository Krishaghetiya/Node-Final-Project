const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/nodeFinal');

const connectDB = mongoose.connection;

connectDB.on('connected',(err)=>{
    if (err) {
        console.log("Database is not connected...");
        return false;
    }

    console.log("Database is connected successfully")
})

module.exports = {connectDB};


