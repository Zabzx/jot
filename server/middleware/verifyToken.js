const jwt = require("jsonwebtoken");
const userSchema = require("../models/userModel");

async function auth(req, res, next) {
    const token = req.header("auth-token");

    if (!token) return res.status(401).send("Access Denied");

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;

        console.log(verified)
        const test = await userSchema.findById(verified._id);
        console.log(test);
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
}

module.exports = auth;