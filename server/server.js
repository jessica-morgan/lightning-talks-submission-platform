const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const authRoutes = require('./routes/auth')
const submissionRoutes = require('./routes/submissions')

server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/submissions', submissionRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
