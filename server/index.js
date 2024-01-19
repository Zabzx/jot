require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.ATLAS_URL;
const cors = require("cors")
const app = express();

const noteRouter = require("./routes/notesRoutes");
const todoRouter = require("./routes/todosRoutes");
const userRouter = require("./routes/userRoutes");

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

db.once("connected", () => {
    console.log("Database connected");
});

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/notes", noteRouter);
app.use("/api/todos", todoRouter);
app.use("/api/user", userRouter);

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});