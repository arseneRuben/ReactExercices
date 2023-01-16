import React from 'react'
import { createRoot } from 'react-dom/client'

import ListContainer from 'container/list-container'
const express = require('express')

const app = express()
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<ListContainer />)
