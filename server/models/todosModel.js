const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String,
    },
    task: {
        required: true,
        type: String,
    },
    completed: {
        required: true,
        type: Boolean,
    },
    date: {
        required: true,
        type: Date,
    },
    deadline: {
        required: false,
        type: Date,
    },
    dateCompleted: {
        required: false,
        type: Date,
    }
});

module.exports = mongoose.model("Todos", todoSchema);