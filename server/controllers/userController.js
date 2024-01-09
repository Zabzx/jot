const userSchema = require("../models/userModel");

async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;
        const user = new userSchema({ username, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registerUser,
}