const express = require("express");
const { getOneNote, createNote, getNotes, updateNote, deleteNote } = require("../controllers/notes");
const noteRouter = express.Router();

noteRouter.get("/", getNotes);
noteRouter.get("/:id", getOneNote);
noteRouter.post("/", createNote);
noteRouter.patch("/:id", updateNote);
noteRouter.delete("/:id", deleteNote);

module.exports = noteRouter;