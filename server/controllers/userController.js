require("dotenv").config();
const userSchema = require("../models/userModel");
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

async function login(req, res) {
    const { username, email, password } = req.body;
    const user = {
        username,
        email,
        password,
    }

    console.log(user);
    // res.send(user)

    const accessToken  = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user;
        next()
    })

}

module.exports = {
    registerUser,
    login,
    authenticateToken
}