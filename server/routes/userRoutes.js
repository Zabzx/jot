const express = require("express");
const userRouter = express.Router();
const { registerUser, login, getUsers } = require("../controllers/userController");

userRouter.get("/users", getUsers);
userRouter.post("/register", registerUser);
userRouter.post("/login", login);

module.exports = userRouter;