import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ColorModeContext } from './context/colorModeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ColorModeContext>
      <App />
  </ColorModeContext>
)
