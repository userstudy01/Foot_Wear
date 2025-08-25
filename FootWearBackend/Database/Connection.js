const mongoose = require("mongoose");
const { DB_NAME } = require("../constant.js");
const dotenv = require("dotenv");


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB Connected");

    } catch (error) {
        console.log("MONGODB connection failed:", error);
    }
}

dotenv.config();

connectDB()