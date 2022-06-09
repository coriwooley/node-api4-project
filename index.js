require('dotenv').config()

const server = require('./api/server')
const routes = require('./api/router')

const port = process.env.PORT || 3000

server.use('/api', routes)

server.use('*', (req, res) => {
    res.send('hello there')
})

server.listen(port, () => {
    console.log(`server listening on ${port}`)
})