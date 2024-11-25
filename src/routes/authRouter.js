const authRouter = require("express").Router();
const authController  = require("../controller/authController");

authRouter.get("/", authController);

module.exports = authRouter;