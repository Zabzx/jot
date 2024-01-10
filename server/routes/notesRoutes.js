const express = require("express");
const { getOneNote, createNote, getNotes, updateNote, deleteNote } = require("../controllers/NotesController");
const { authenticateToken } = require("../controllers/userController");
// const { authenticateToken } = require("../middleware/auth");
const noteRouter = express.Router();

noteRouter.get("/", authenticateToken, getNotes);
noteRouter.get("/:id", getOneNote);
noteRouter.post("/", createNote);
noteRouter.patch("/:id", updateNote);
noteRouter.delete("/:id", deleteNote);

module.exports = noteRouter;