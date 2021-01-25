const express = require('express')
const bodyParser = require('body-parser')
const router = require('./src/server/Routes/router')
const path = require('path')
const app = express()
require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/osxDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(express.static(path.join(__dirname, 'build')));
app.use("/api", router)



const PORT = process.env.PORT = 4000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))