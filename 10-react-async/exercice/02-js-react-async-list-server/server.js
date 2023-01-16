'use strict'
const fs = require('fs')

const FILE_NAME = 'user-list.json'
function readDatas (fileName) {
    const datas = fs.readFileSync(fileName)
    return JSON.parse(datas)
}
const express = require('express')

const app = express()
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(express.static('dist'))

// parse application/json
app.use(express.json())

const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_HTML = 'text/html'
const CONTENT_TYPE_JSON = 'application/json'

app.get('/users', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(readDatas(FILE_NAME)))
})
app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Home page</h1>')
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
