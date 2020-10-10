const express = require('express')
const config = require('./server/config')
const routes = require('./server/routes')
const query = require('./server/database');
const pool = require('./server/database');

var server = express()
server = config(server)
server = routes(server)


server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})