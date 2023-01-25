'use strict'

const express = require('express')

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
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'
const USERS = [
    {
        id: 1,
        userName: 'patate',
        firstName: 'Pat',
        lastName: 'Ate'
    },
    {
        id: 2,
        userName: 'gcote',
        firstName: 'Gros',
        lastName: 'Coté'
    },
    {
        id: 3,
        userName: 'fmartineau',
        firstName: 'François',
        lastName: 'Martineau'
    },
    {
        id: 4,
        userName: 'mstpierre',
        firstName: 'Marc',
        lastName: 'St-Pierre'
    },
    {
        id: 5,
        userName: 'msimard',
        firstName: 'Mélanie',
        lastName: 'Simard'
    },
    {
        id: 6,
        userName: 'agermain',
        firstName: 'Audrée',
        lastName: 'Germain'
    }
]

function readData (id) {
    const index = findIndex(USERS, id)

    return USERS[index]
}

function addData (data) {
    USERS.forEach(element => {
        if (element.id === data.id) {
            throw new Error('Element already exists')
        }
    })

    USERS.push({ id: USERS.length + 1, ...data })
}

function deleteData (id) {
    const index = findIndex(USERS, id)

    return USERS.splice(index, 1)
}

function updateData (data) {
    const index = findIndex(USERS, data.id)

    USERS[index] = data
}

function findIndex (datas, id) {
    const index = datas.findIndex(function (element) {
        return element.id === parseInt(id)
    })

    if (index === -1) {
        throw new Error('Element not found')
    }

    return index
}

app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Home page</h1>')
})

app.get('/users/:id', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(readData(parseInt(request.params.id))))
})

app.get('/users', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(USERS))
})

app.post('/users', function (request, response) {
    addData(request.body)
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(USERS))
})

app.put('/users', function (request, response) {
    updateData(request.body)
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(readData(parseInt(request.body.id))))
})

app.delete('/users/:id', function (request, response) {
    deleteData(parseInt(request.params.id))
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(USERS))
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
