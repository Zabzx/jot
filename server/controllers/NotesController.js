const Joi = require("joi");
const noteSchema = require("../models/noteModel");
const { getDateAndTime } = require("../utils/time");

const joiSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    userId: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
})

async function getOneNote(req, res) {
    try {
        // Make sure the correct user is accessing the data
        const notes = await noteSchema.find({ userId: req.user.id });
        const note = notes.filter(note => note._id.toHexString() === req.params.id);

        if (!note[0]) return res.status(404).send("Note not found");

        res.json(note[0]);
    } catch (error) {
        res.status(500).json({ message: error.messasge });
    }
}

async function getNotes(req, res) {
    try {
        const data = await noteSchema.find({ userId: req.user.id });
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

    const validation = joiSchema.validate(data, { allowUnknown: true })

    if (!validation.error) {
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.json(validation.error.details[0].message)
    }
}

async function updateNote(req, res) {
    try {
        const notes = await noteSchema.find({ userId: req.user.id });
        const note = notes.filter(note => note._id.toHexString() === req.params.id);

        if (!note[0]) return res.status(404).send("Note not found");

        const id = note[0]._id;
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
        const notes = await noteSchema.find({ userId: req.user.id });
        const note = notes.filter(note => note._id.toHexString() === req.params.id);

        if (!note[0]) return res.status(404).send("Note not found");

        const id = note[0]._id;
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