const mongoose = require("mongoose")

const User = mongoose.model("User", new mongoose.Schema({
    name: String,
    password: String
}))

module.exports = User;



