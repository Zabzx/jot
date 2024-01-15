const todoSchema = require("../models/todosModel");
const { getDateAndTime } = require("../utils/time");

async function getOneTodo(req, res) {
    try {
        const todos = await todoSchema.find({ userId: req.user.id });
        const todo = todos.filter(todo => todo._id.toHexString() === req.params.id);

        if (!todo[0]) return res.status(404).send("Todo not found");

        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTodos(req, res) {
    try {
        const data = await todoSchema.find({ userId: req.user.id });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createTodo(req, res) {
    const [formattedDate] = getDateAndTime();

    const data = todoSchema({
        userId: req.user.id,
        title: req.body.title,
        task: req.body.task,
        date: formattedDate,
        completed: false
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function updateTodo(req, res) {
    try {
        const todos = await todoSchema.find({ userId: req.user.id });
        const todo = todos.filter(todo => todo._id.toHexString() === req.params.id);

        if (!todo[0]) return res.status(404).send("Todo not found");

        const id = todo[0].id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await todoSchema.findByIdAndUpdate(
            id, updatedData, options
        );

        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function toggleTodoStatus(req, res) {
    try {
        const todos = await todoSchema.find({ userId: req.user.id });
        let todo = todos.filter(todo => todo._id.toHexString() === req.params.id);

        if (!todo[0]) return res.status(404).send("Todo not found");

        todo = todo[0];

        const id = todo.id;
        todo.completed = !todo.completed;
        const options = { new: true };

        const result = await todoSchema.findByIdAndUpdate(
            id, todo, options
        );

        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteTodo(req, res) {
    try {
        const todos = await todoSchema.find({ userId: req.user.id });
        const todo = todos.filter(todo => todo._id.toHexString());

        if (!todo[0]) return res.status(404).send("Todo not found");

        const id = todo[0]._id;
        const data = await todoSchema.findByIdAndDelete(id);
        res.send(`Deleted ${data}`);
    } catch (error) {
        res.send(400).json({ message: error.message });
    }
}

module.exports = {
    getOneTodo,
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo,
    toggleTodoStatus
}