'use strict'

const express = require('express')

const app = express()
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'

app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Home page</h1>')
})

app.get('/users/:id', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>' + request.params.id + '</h1>')
})

app.post('/users', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>' + request.params.a + '</h1>')
})

app.put('/users', function (request, response) {
    const testObjectString = JSON.stringify(request.body, null, 4)

    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(testObjectString)
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
