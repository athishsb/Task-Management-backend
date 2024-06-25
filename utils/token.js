const jwt = require("jsonwebtoken");

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY);
}

module.exports = {
    createAccessToken,
}