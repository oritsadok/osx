const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    password: Number,
    //date: Date
})

const User = mongoose.model("user", userSchema)
module.exports = User
