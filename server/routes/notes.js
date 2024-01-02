const express = require("express");
const { getOne, testPost, getNotes } = require("../controllers/notes");
const noteRouter = express.Router();

noteRouter.get("/", getNotes);
noteRouter.get("/:id", getOne);
noteRouter.post("/", testPost);
noteRouter.get("/", );
noteRouter.get("/", );

module.exports = noteRouter;