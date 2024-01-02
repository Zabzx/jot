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

function getDateAndTime() {
    // Date
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    // Time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    return [formattedDate, formattedTime];
}

const [date, time] = getDateAndTime();

console.log(date, time)