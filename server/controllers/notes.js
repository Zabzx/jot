const Model = require("../model/model");

function getOne(req, res) {
    res.send(req.params);
}

async function testPost(req, res) {
    const data = new Model({
        id: req.body.id,
        content: req.body.content,
    });

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
}