const express = require("express");
const userRouter = express.Router();
const { registerUser, login } = require("../controllers/userController");

userRouter.post("/register", login);

module.exports = userRouter;