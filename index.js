const express = require("express");
require('dotenv').config();

const authRouter = require("./src/routes/authRouter");
const app = express();

app.use("/auth", authRouter);
app.use("*", (req, res, next) => {
    res.status(404).json({
        status: "Fail",
        message: "Route not found"
    });
    next();
});

const PORT = process.env.APP_PORT || 3001; 
app.listen(PORT);