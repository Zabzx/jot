const express = require("express");
const { getOne, testPost } = require("../controllers/notes");
const noteRouter = express.Router();

noteRouter.get("/", );
noteRouter.get("/:id", getOne);
noteRouter.post("/", testPost);
noteRouter.get("/", );
noteRouter.get("/", );

module.exports = noteRouter;