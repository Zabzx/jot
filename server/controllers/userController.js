require("dotenv").config();
const userSchema = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

// async function getUser(req, res) {

// }

async function getUsers(req, res) {
    try {
        const data = await userSchema.find();
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

async function login(req, res) {
    const user = await userSchema.findOne({
        $or: [
            { username: req.body.username },
            { email: req.body.email }
        ]
    });

    if (!user) return res.status(400).send("Invalid email or username");


    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) return res.status(400).send("Wrong password");

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
    res.header("auth-token", token).send(token);
}

async function updateUsername(req, res) {
    const user = await userSchema.find({ _id: req.user.id });

    if (!user) return res.status(404).send("User not found");

    const id = user[0].id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await userSchema.findByIdAndUpdate(
        id, updatedData, options
    )

    res.send(result);
}

async function deleteUser(req, res) {
    try {
        const result = await userSchema.findByIdAndDelete(req.user.id);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    registerUser,
    login,
    // getUser,
    getUsers,
    updateUsername,
    deleteUser,
}