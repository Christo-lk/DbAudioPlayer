const path = require('path')
const express = require('express')

const server = express()

const apiSongs = require('./routes/apiSongs')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/songs', apiSongs)

module.exports = server
