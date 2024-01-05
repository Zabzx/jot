const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    content: {
        required: true,
        type: String,
    },
    date: {
        required: true,
        type: Date,
    },
    time: {
        required: true,
        type: String,
    }
});

module.exports = mongoose.model("Data", noteSchema);