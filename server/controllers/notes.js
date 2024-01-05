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
        const data = await noteSchema.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createNote(req, res) {

    const [formattedDate, formattedTime] = getDateAndTime();

    const data = new noteSchema({
        title: req.body.title,
        content: req.body.content,
        date: formattedDate,
        time: formattedTime,
    });

    console.log(formattedDate)

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getOneNote,
    createNote,
    getNotes,
}