const express = require('express')
require('dotenv').config()

const app = express()
app.get('/', (req, res) => {
    res.json({message: "Hey This is the / route for SIDEHUSTLE BackEnd", status: "UP"})
})
const PORT = process.env.BACKEND_PORT || 4001;
app.listen(PORT, () => {
    console.log(`SIDEHUSTLE server is running at Port Number ${PORT}`)
})