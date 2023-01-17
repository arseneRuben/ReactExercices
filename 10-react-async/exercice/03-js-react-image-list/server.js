'use strict'

const express = require('express')

const app = express()
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(express.static('dist'))

// parse application/json
app.use(express.json())

const PORT = 8080

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
