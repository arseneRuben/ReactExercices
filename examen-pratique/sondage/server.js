'use strict'

const express = require('express')
const dao = require('./src/server')

const app = express()
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// CORS for development
// https://enable-cors.org/server_expressjs.html
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    response.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
    response.header('Access-Control-Allow-Credentials', 'false')
    next()
})

// parse application/json
app.use(express.json())

const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_HTML = 'text/html'
const CONTENT_TYPE_JSON = 'application/json'

// Add track in a specifig playlist
app.post('/sondage', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(request.body))
    dao.saveDatas(JSON.stringify(request.body))
})
// display form
app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Server page</h1>')
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
