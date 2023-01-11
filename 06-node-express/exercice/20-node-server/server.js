'use strict'
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'

const {
    addData,
    readData,
    readDatas,
    saveDatas,
    updateData
} = require('../../../05-node/exercice/node-fs')
// Creation of database file
const TEST_FILE_NAME = 'test.json'
const TEST_DATA = [
    { id: 100, userName: 'mvachon', age: 12 },
    { id: 101, userName: 'jcote', age: 66 },
    { id: 102, userName: 'pmartineau', age: 99 }
]
saveDatas(TEST_FILE_NAME, TEST_DATA)

app.get('/datas/:id', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(
        JSON.stringify(readData(TEST_FILE_NAME, parseInt(request.params.id)))
    )
})

app.get('/datas', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(readDatas(TEST_FILE_NAME)))
})

app.post('/datas', function (request, response) {
    const ABOUBAKAR = JSON.stringify(request.body, null, 4)
    console.log(ABOUBAKAR)
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    addData(TEST_FILE_NAME, ABOUBAKAR)

    response.end(
        JSON.stringify(readData(TEST_FILE_NAME, parseInt(ABOUBAKAR.id)))
    )
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
