import React from 'react'
import { createRoot } from 'react-dom/client'

import FrameContainer from './container/frame-container'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<FrameContainer />)
