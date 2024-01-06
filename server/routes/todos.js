const express = require("express");
const { getOneTodo, getTodos, createTodo } = require("../controllers/todos");
const todoRouter = express.Router();

todoRouter.get("/", getTodos);
todoRouter.get("/:id", getOneTodo);
todoRouter.post("/", createTodo);

module.exports = todoRouter;