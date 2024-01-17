const express = require("express");
const userRouter = express.Router();
const { registerUser, login, getUsers, deleteUser, updateUsername, changePassword } = require("../controllers/userController");
const auth = require("../middleware/auth");

// userRouter.get("/users", getUsers);
// userRouter.get("/users/:id", auth, getUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.patch("/user/update", auth, updateUsername);
userRouter.patch("/user/changepassword", auth, changePassword);
userRouter.delete("/", auth, deleteUser);

module.exports = userRouter;