const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const response = require('./response')
require('dotenv').config()

app.use(cors())
app.use(express.json());
// setup the logger
app.use(morgan('combined'))

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/upload', function(req, res) {
    res.status(200).send(response)
})
  
app.listen(8000, () => {
    console.log("Server started successfully, running on port: 8000")
})