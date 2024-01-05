const noteSchema = require("../models/noteModel");

function getDateAndTime() {
    // Date
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    // Time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    return [formattedDate, formattedTime];
}

async function getOne(req, res) {
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

async function testPost(req, res) {

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
    getOne,
    testPost,
    getNotes,
}