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
    }
});

module.exports = mongoose.model("Data", noteSchema);