import React from 'react'
import { createRoot } from 'react-dom/client'

import TableUserContainer from './container/table-user-container'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<TableUserContainer />)
