const express = require("express");
const { getOneNote, createNote, getNotes } = require("../controllers/notes");
const noteRouter = express.Router();

noteRouter.get("/", getNotes);
noteRouter.get("/:id", getOneNote);
noteRouter.post("/", createNote);
noteRouter.get("/", );
noteRouter.get("/", );

module.exports = noteRouter;