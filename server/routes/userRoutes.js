const express = require("express");
const userRouter = express.Router();
const { registerUser, login, deleteUser, updateUsername, changePassword, getUsers } = require("../controllers/userController");
const auth = require("../middleware/auth");

userRouter.get("/users", getUsers);
// userRouter.get("/users/:id", auth, getUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.patch("/update", auth, updateUsername);
userRouter.patch("/changepassword", auth, changePassword);
userRouter.delete("/", auth, deleteUser);

module.exports = userRouter;