const jwt = require("jsonwebtoken");
const userSchema = require("../models/userModel");

async function auth(req, res, next) {
    const token = req.header("auth-token");

    if (!token) return res.status(401).send("Access Denied");

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await userSchema.findById(verified._id);
        req.user = user;

        if (!user) return res.status(404).send(`User with the id of ${verified._id} not found.`);
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
}

function protectRoutes(req, res) {
    const token = req.header("auth-token")

    if (!token) return res.status(401).send("Access Denied")

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        res.send(verified)
        
    } catch (error) {
        res.send("Invalid token")
    }
}

module.exports = {
    auth,
    protectRoutes
};
