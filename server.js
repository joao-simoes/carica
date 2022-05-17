// declare status
const SUCCESS = 200
const UNAUTHORIZED = 401
const NOTFOUND = 404

// load libraries
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const cors = require('cors')

// load configs
app.use(cors())
app.use(express.json())
require('dotenv').config()

// load mongoose
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', function() {
    console.log("Connected to MongoDB")
})

// load routes
app.use('/new', require('./routes/new.js'))
app.use('/get', require('./routes/get.js'))













// routes preventions

app.get('/*', (req, res) => {
    res.sendStatus(NOTFOUND)
})

app.post('/*', (req, res) => {
    res.sendStatus(NOTFOUND)
})




// start server
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}!`)

})