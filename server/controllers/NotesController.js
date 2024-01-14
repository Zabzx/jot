const noteSchema = require("../models/noteModel");
const { getDateAndTime } = require("../utils/time");

async function getOneNote(req, res) {
    try {
        const data = await noteSchema.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.messasge });
    }
}

async function getNotes(req, res) {
    try {
        // const data = await noteSchema.find();
        // console.log(req.user)
        const data = await noteSchema.find({ userId: req.user.id });
        console.log(data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createNote(req, res) {

    const [formattedDate, formattedTime] = getDateAndTime();

    const data = new noteSchema({
        userId: req.user.id,
        title: req.body.title,
        content: req.body.content,
        date: formattedDate,
        time: formattedTime,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function updateNote(req, res) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await noteSchema.findByIdAndUpdate(
            id, updatedData, options
        );

        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteNote(req, res) {
    try {
        const id = req.params.id;
        const data = await noteSchema.findByIdAndDelete(id)
        res.send(`Note: ${data} deleted`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getOneNote,
    createNote,
    getNotes,
    updateNote,
    deleteNote,
}