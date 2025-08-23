import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Force complete cache bust - timestamp: 1724434800
console.log('Portfolio loaded - Cache bust active:', Date.now());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
