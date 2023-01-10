'use strict'

const express = require('express')

const app = express()
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

/**
 * Une distinction existe en les méthodes .send() et .end()
 *
 * .send()
 *      - Proviens de Express
 *      - Détecte le content type automatiquement et asigne un header
 *      - Permet le passage d'un object qui sera automatiquement tranformer en JSON
 *      - Assigne le header Etag contenant un identifiant unique pour la réponse permettant l'optimisation du cache
 *
 * .end()
 *      - Proviens de NodeJs core
 *      - Nécessite l'assignation d'un header avec .writeHead()
 *      - Permet le passage de text seulement
 */

const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'

app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Home page</h1>')
})

app.get('/test-param/:a', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>' + request.params.a + '</h1>')
})

app.get('/test-json', function (request, response) {
    const testObject = { a: 'val1', b: 'val2' }
    const testObjectString = JSON.stringify(testObject, null, 4)

    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(testObjectString)
})

app.post('/test-json', function (request, response) {
    const testObjectString = JSON.stringify(request.body, null, 4)

    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(testObjectString)
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
