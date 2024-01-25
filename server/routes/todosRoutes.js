const express = require("express");
const { getOneTodo, getTodos, createTodo, deleteTodo, updateTodo, toggleTodoStatus } = require("../controllers/todosController");
const todoRouter = express.Router();
const { auth } = require("../middleware/auth");

todoRouter.get("/", auth, getTodos);
todoRouter.get("/:id", auth, getOneTodo);
todoRouter.post("/", auth, createTodo);
todoRouter.patch("/:id", auth, updateTodo);
todoRouter.patch("/toggle/:id", auth, toggleTodoStatus);
todoRouter.delete("/:id", auth, deleteTodo);

module.exports = todoRouter;