const connectDB = require("./Database/Connection.js");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
        credentials: true,
    })
);

// importing routes
const { userRouter } = require("./Routes/user.route");

// using routes
app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

