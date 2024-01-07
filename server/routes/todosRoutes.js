const express = require("express");
const { getOneTodo, getTodos, createTodo, deleteTodo, updateTodo, toggleTodoStatus } = require("../controllers/todosController");
const todoRouter = express.Router();

todoRouter.get("/", getTodos);
todoRouter.get("/:id", getOneTodo);
todoRouter.post("/", createTodo);
todoRouter.patch("/:id", updateTodo);
todoRouter.patch("/toggle/:id", toggleTodoStatus);
todoRouter.delete("/:id", deleteTodo);

module.exports = todoRouter;