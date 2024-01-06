const todoSchema = require("../models/todos");
const { getDateAndTime } = require("../utils/time");

async function getOneTodo(req, res) {
    try {
        const data = await todoSchema.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTodos(req, res) {
    try {
        const data = await todoSchema.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createTodo(req, res) {
    const [formattedDate] = getDateAndTime();

    const data = todoSchema({
        title: req.body.title,
        task: req.body.task,
        date: formattedDate,
        completed: false
    });

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getOneTodo,
    getTodos,
    createTodo,
}