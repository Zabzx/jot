require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.ATLAS_URL;
const app = express();

const noteRouter = require("./routes/notes");

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

db.once("connected", () => {
    console.log("Database connected");
});

app.use(express.json());
app.use("/api", noteRouter);

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});