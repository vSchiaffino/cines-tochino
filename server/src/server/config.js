const morgan = require('morgan')
const express = require('express')
const bodyParser = require("body-parser")

module.exports = (server) => {
    // Enviroment config
    process.env.PORT = process.env.PORT || "3000"
    process.env.SUDO_KEY = '844a8db879070204c0485c6c2e9e6d9067dc97aff5e9b934e2e1335dbb8a5023'
    // Config
    
    // Middlewares
    server.use(morgan("dev"))
    server.use(express.json())
    server.use(bodyParser.urlencoded({extended: true}))
    // ----- Devuelvo -----
    return server
}

