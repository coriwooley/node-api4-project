require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())
server.use(cors())

server.get('/api/users', (req, res) => {
    res.send('GET users')
})

server.post('/api/register', (req, res) => {
    res.send('POST register')
})

server.post('/api/login', (req, res) => {
    res.send('POST login')
})

server.use('*', (req, res) => {
    res.send('hello there')
})


server.listen(port, () => {
    console.log(`server listening on ${port}`)
})