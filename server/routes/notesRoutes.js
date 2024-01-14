const express = require("express");
const { getOneNote, createNote, getNotes, updateNote, deleteNote } = require("../controllers/NotesController");
// const { authenticateToken } = require("../controllers/userController");
const auth = require("../middleware/verifyToken");
const noteRouter = express.Router();

noteRouter.get("/", auth, getNotes);
noteRouter.get("/:id", getOneNote);
noteRouter.post("/", createNote);
noteRouter.patch("/:id", updateNote);
noteRouter.delete("/:id", deleteNote);

module.exports = noteRouter;