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

const router = express.Router()

router.get('/id', readData)
router.get('/', readDatas)
router.post('/add', addData)
router.put('/', saveDatas)
router.put('/id', updateData)

console.log('Exécution du serveur')
