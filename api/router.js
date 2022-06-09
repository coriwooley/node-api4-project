const express = require('express')
const router = express.Router()

router.get('/api/users', (req, res) => {
    res.send('GET users')
})

router.post('/api/register', (req, res) => {
    res.send('POST register')
})

router.post('/api/login', (req, res) => {
    res.send('POST login')
})

module.exports = router