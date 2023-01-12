const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const connectDb = require('./config/db')
const cors = require("cors")

connectDb()
app.use(express.json())
app.use(cors())
app.use('/api/notes', require('./router/noteRoute'))
PORT=  process.env.PORT
app.listen(PORT, () => console.log(`Listening to port number: ${PORT}`))