const express = require("express");
const { getOneNote, createNote, getNotes, updateNote, deleteNote } = require("../controllers/NotesController");
const { auth } = require("../middleware/auth");
const noteRouter = express.Router();

noteRouter.get("/", auth, getNotes);
noteRouter.get("/:id", auth, getOneNote);
noteRouter.post("/", auth, createNote);
noteRouter.patch("/:id", auth, updateNote);
noteRouter.delete("/:id", auth, deleteNote);

module.exports = noteRouter;